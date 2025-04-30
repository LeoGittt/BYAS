// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { MessageCircle, X, Send, ChevronDown } from "lucide-react";
// import { useTheme } from "next-themes";

// export default function VirtualAssistant() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       type: "assistant",
//       content:
//         "¡Hola! Soy el asistente virtual de BYAS. ¿En qué puedo ayudarte hoy?",
//     },
//   ]);
//   const [inputValue, setInputValue] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const messagesEndRef = useRef(null);
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!inputValue.trim()) return;

//     // Add user message
//     const userMessage = {
//       type: "user",
//       content: inputValue,
//     };
//     setMessages([...messages, userMessage]);
//     setInputValue("");
//     setIsTyping(true);

//     // Simulate assistant response after a delay
//     setTimeout(() => {
//       const responses = [
//         "Gracias por tu consulta. Nuestro equipo de topografía puede ayudarte con ese proyecto.",
//         "Podemos realizar ese tipo de relevamiento. ¿Te gustaría agendar una consulta con uno de nuestros especialistas?",
//         "Entiendo tus necesidades. Para proyectos de ese tipo, ofrecemos soluciones personalizadas con la mejor tecnología disponible.",
//         "Nuestro equipo tiene amplia experiencia en ese campo. ¿Necesitas más información sobre nuestros servicios?",
//       ];

//       const assistantMessage = {
//         type: "assistant",
//         content: responses[Math.floor(Math.random() * responses.length)],
//       };

//       setMessages((prevMessages) => [...prevMessages, assistantMessage]);
//       setIsTyping(false);
//     }, 1500);
//   };

//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   return (
//     <>
//       <button
//         onClick={toggleChat}
//         className="fixed bottom-6 right-6 z-50 bg-blue-800 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-colors"
//         aria-label="Abrir chat"
//       >
//         {isOpen ? (
//           <X className="h-6 w-6" />
//         ) : (
//           <MessageCircle className="h-6 w-6" />
//         )}
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 20, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 20, scale: 0.95 }}
//             transition={{ duration: 0.3 }}
//             className="fixed bottom-24 right-6 w-80 md:w-96 bg-gray-800 rounded-xl shadow-2xl overflow-hidden z-50 border border-gray-700"
//           >
//             <div className="bg-blue-900 text-white p-4">
//               <div className="flex items-center justify-between">
//                 <h3 className="font-bold">Asistente Virtual BYAS</h3>
//                 <div className="flex space-x-2">
//                   <button
//                     onClick={toggleChat}
//                     className="hover:bg-blue-800 p-1 rounded"
//                     aria-label="Cerrar chat"
//                   >
//                     <ChevronDown className="h-4 w-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="h-80 overflow-y-auto p-4 bg-gray-900">
//               {messages.map((message, index) => (
//                 <div
//                   key={index}
//                   className={`mb-4 flex ${
//                     message.type === "user" ? "justify-end" : "justify-start"
//                   }`}
//                 >
//                   <div
//                     className={`max-w-[80%] rounded-lg p-3 ${
//                       message.type === "user"
//                         ? "bg-blue-600 text-white"
//                         : "bg-gray-800 text-gray-200 border border-gray-700"
//                     }`}
//                   >
//                     {message.content}
//                   </div>
//                 </div>
//               ))}
//               {isTyping && (
//                 <div className="mb-4 flex justify-start">
//                   <div className="max-w-[80%] rounded-lg p-3 bg-gray-800 text-gray-200 border border-gray-700">
//                     <div className="flex items-center space-x-1">
//                       <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
//                       <div
//                         className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
//                         style={{ animationDelay: "0.2s" }}
//                       ></div>
//                       <div
//                         className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
//                         style={{ animationDelay: "0.4s" }}
//                       ></div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//               <div ref={messagesEndRef} />
//             </div>

//             <form
//               onSubmit={handleSubmit}
//               className="p-3 border-t border-gray-700 flex"
//             >
//               <Input
//                 type="text"
//                 placeholder="Escribe tu mensaje..."
//                 value={inputValue}
//                 onChange={handleInputChange}
//                 className="flex-grow mr-2 bg-gray-800 text-gray-200 border-gray-700"
//               />
//               <Button
//                 type="submit"
//                 size="icon"
//                 className="bg-blue-800 hover:bg-blue-700 text-white"
//               >
//                 <Send className="h-4 w-4" />
//               </Button>
//             </form>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
