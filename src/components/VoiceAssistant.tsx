import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react';

interface VoiceAssistantProps {
  onVoiceQuery: (query: string) => void;
  isListening?: boolean;
}

const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ onVoiceQuery, isListening = false }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
  const [synthesis, setSynthesis] = useState<SpeechSynthesis | null>(null);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    // Initialize Speech Recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onstart = () => {
        setIsRecording(true);
      };

      recognitionInstance.onresult = (event) => {
        const current = event.resultIndex;
        const transcriptResult = event.results[current][0].transcript;
        setTranscript(transcriptResult);
        
        if (event.results[current].isFinal) {
          onVoiceQuery(transcriptResult);
          setTranscript('');
        }
      };

      recognitionInstance.onend = () => {
        setIsRecording(false);
      };

      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsRecording(false);
      };

      setRecognition(recognitionInstance);
    }

    // Initialize Speech Synthesis
    if ('speechSynthesis' in window) {
      setSynthesis(window.speechSynthesis);
    }
  }, [onVoiceQuery]);

  const startListening = () => {
    if (recognition && !isRecording) {
      recognition.start();
    }
  };

  const stopListening = () => {
    if (recognition && isRecording) {
      recognition.stop();
    }
  };

  const speak = (text: string) => {
    if (synthesis && !isSpeaking) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      
      synthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if (synthesis && isSpeaking) {
      synthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const handleVoiceCommand = () => {
    if (isRecording) {
      stopListening();
    } else {
      startListening();
    }
  };

  // Voice command responses
  const voiceResponses = {
    greeting: "Hello! I'm your VillageStay voice assistant. How can I help you find the perfect rural destination today?",
    destinations: "I can help you find amazing rural destinations. Try saying 'Show me budget destinations' or 'Find places for adventure'",
    budget: "What's your budget range? I can suggest destinations that fit your budget perfectly.",
    help: "You can ask me about destinations, budget options, seasonal recommendations, or say 'surprise me' for personalized suggestions!"
  };

  // Auto-respond to common queries
  useEffect(() => {
    if (transcript) {
      const query = transcript.toLowerCase();
      if (query.includes('hello') || query.includes('hi')) {
        speak(voiceResponses.greeting);
      } else if (query.includes('help')) {
        speak(voiceResponses.help);
      } else if (query.includes('budget')) {
        speak(voiceResponses.budget);
      } else if (query.includes('destination') || query.includes('place')) {
        speak(voiceResponses.destinations);
      }
    }
  }, [transcript]);

  if (!recognition) {
    return null; // Don't render if speech recognition is not supported
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end space-y-2">
        {/* Transcript Display */}
        {transcript && (
          <div className="bg-white rounded-lg shadow-lg p-3 max-w-xs">
            <p className="text-sm text-gray-700">{transcript}</p>
          </div>
        )}

        {/* Voice Controls */}
        <div className="flex space-x-2">
          {/* Speak Button */}
          <button
            onClick={() => isSpeaking ? stopSpeaking() : speak(voiceResponses.greeting)}
            className={`p-3 rounded-full shadow-lg transition-colors ${
              isSpeaking 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
            title={isSpeaking ? 'Stop speaking' : 'Speak greeting'}
          >
            {isSpeaking ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>

          {/* Microphone Button */}
          <button
            onClick={handleVoiceCommand}
            className={`p-4 rounded-full shadow-lg transition-all duration-300 ${
              isRecording 
                ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse' 
                : 'bg-emerald-500 hover:bg-emerald-600 text-white'
            }`}
            title={isRecording ? 'Stop listening' : 'Start voice search'}
          >
            {isRecording ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
          </button>
        </div>

        {/* Status Indicator */}
        {isRecording && (
          <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs animate-pulse">
            Listening...
          </div>
        )}
        
        {isSpeaking && (
          <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">
            Speaking...
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceAssistant;