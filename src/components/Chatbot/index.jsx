// import React, { useEffect, useState } from "react";
// import {
//   Widget,
//   addResponseMessage,
//   setQuickButtons,
//   addUserMessage,
// } from "react-chat-widget";
// import './style.css';
// // import "react-chat-widget/lib/styles.css";

// const questionFlow = {
//   welcome: {
//     message: "Welcome to Rapido Relief! How can I assist you today?",
//     options: [
//       { label: "Symptom Check", value: "symptom_check" },
//       { label: "Consultation Booking", value: "consultation_booking" },
//       { label: "Medication Assistance", value: "medication_assistance" },
//       { label: "Mental Health Tips", value: "mental_health_tips" },
//     ],
//   },
//   symptom_check: {
//     message: "Let's assess your symptoms. How severe are your symptoms?",
//     options: [
//       { label: "Mild", value: "symptom_mild" },
//       { label: "Moderate", value: "symptom_moderate" },
//       { label: "Severe", value: "symptom_severe" },
//     ],
//   },
//   symptom_mild: {
//     message: "For mild symptoms, we recommend rest and hydration. Would you like more tips or schedule a consultation?",
//     options: [
//       { label: "More Tips", value: "more_tips_mild" },
//       { label: "Schedule Consultation", value: "consultation_booking" },
//     ],
//   },
//   symptom_moderate: {
//     message: "Moderate symptoms may require a doctor's attention. Please schedule a consultation.",
//     options: [
//       { label: "Schedule Consultation", value: "consultation_booking" },
//     ],
//   },
//   symptom_severe: {
//     message: "Severe symptoms require immediate medical attention. Please visit the nearest emergency room.",
//     options: [],
//   },
//   more_tips_mild: {
//     message: "Here are some tips: Stay hydrated, get plenty of rest, and monitor your symptoms.",
//     options: [
//       { label: "Schedule Consultation", value: "consultation_booking" },
//     ],
//   },
//   consultation_booking: {
//     message: "Schedule a consultation with a doctor based on your symptoms. Visit our booking page for more details.",
//     options: [],
//   },
//   medication_assistance: {
//     message: "Find nearby pharmacies for your medication needs.",
//     options: [],
//   },
//   mental_health_tips: {
//     message: "Here are some tips to manage stress: Practice mindfulness, stay active, and connect with loved ones.",
//     options: [],
//   },
//   end: {
//     message: "Do you want to know anything else?",
//     options: [
//       { label: "Yes", value: "welcome" },
//       { label: "No", value: "goodbye" },
//     ],
//   },
//   goodbye: {
//     message: "Thank you for using Rapido Relief! Have a great day!",
//     options: [],
//   },
// };

// const ChatBot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [currentStep, setCurrentStep] = useState("welcome");

//   useEffect(() => {
//     if (currentStep === "welcome") {
//       const initialStep = questionFlow[currentStep];
//       addResponseMessage(initialStep.message);
//       setQuickButtons(initialStep.options);
//     }
//   }, [currentStep]);

//   const handleNewUserMessage = (newMessage) => {
//     setMessages((prevMessages) => [...prevMessages, { message: newMessage, sender: "user" }]);
//   };

//   const handleQuickButtonClicked = (data) => {
//     if (data === "end") {
//       const endStep = questionFlow["end"];
//       setCurrentStep("end");
//       addResponseMessage(endStep.message);
//       setQuickButtons(endStep.options);
//     } else if (questionFlow[data]) {
//       const nextStep = questionFlow[data];
//       setCurrentStep(data);
//       addUserMessage(questionFlow[currentStep].options.find(option => option.value === data).label); 
//       addResponseMessage(nextStep.message);
//       if (nextStep.options.length > 0) {
//         setQuickButtons(nextStep.options);
//       } else {
//         setQuickButtons([{ label: "More", value: "end" }]);
//       }
//     }
//   };

//   const handleToggleChat = () => {
//     setIsOpen((prevIsOpen) => !prevIsOpen);
//   };

//   return (
//     <div className="chatbot-css">
//       <Widget
//         handleNewUserMessage={handleNewUserMessage}
//         handleQuickButtonClicked={handleQuickButtonClicked}
//         title="Rapido Relief"
//         subtitle="Ask Rapido"
//         launcherOpenLabel="Close"
//         launcherCloseLabel="Open"
//         isOpen={isOpen}
//         handleToggle={handleToggleChat}
//         messages={messages.map((msg, index) => ({
//           id: index,
//           message: msg.message,
//           sender: msg.sender,
//         }))}
//         customLauncher={
//           <div className="custom-launcher">
//             {questionFlow[currentStep].options.map((option) => (
//               <button
//                 key={option.value}
//                 onClick={() => handleQuickButtonClicked(option.value)}
//               >
//                 {option.label}
//               </button>
//             ))}
//           </div>
//         }
//         customCloseButton={
//           <div style={{ textAlign: "center" }}>
//             <button onClick={handleToggleChat}>
//               X
//             </button>
//           </div>
//         }
//       />
//     </div>
//   );
// };

// export default ChatBot;
