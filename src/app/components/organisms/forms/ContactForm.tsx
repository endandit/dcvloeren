import { useState } from "react";
import InputName from "../../../../imports/InputName";
import InputMail from "../../../../imports/InputMail";
import { CheckTopicsGrid } from "./CheckTopicsGrid";
import { HeadingQuote, HeadingSelect } from "../../molecules/headings";
import { ButtonSend } from "../../molecules/buttons/ButtonSend";
import { projectId, publicAnonKey } from "../../../../../utils/supabase/info";

type TopicId = 'parket' | 'laminaat' | 'pvc' | 'microcement' | 'traptreden' | 'renovatie' | 'akoestiek' | 'interieur';

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTopics, setSelectedTopics] = useState<Set<TopicId>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonState, setButtonState] = useState<'default' | 'success' | 'error'>('default');
  const [shakeInputs, setShakeInputs] = useState(false);

  const handleSend = async () => {
    // Validate
    if (!name.trim() || !email.trim()) {
      // Trigger shake animation
      setShakeInputs(true);
      setTimeout(() => setShakeInputs(false), 500);
      return;
    }

    setIsSubmitting(true);
    setButtonState('default');

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-6cf48fbc/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            name,
            email,
            topics: Array.from(selectedTopics),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("Error sending email:", data);
        setButtonState('error');
        // Reset to default after 3 seconds
        setTimeout(() => setButtonState('default'), 3000);
        return;
      }

      console.log("Email sent successfully:", data);
      setButtonState('success');
      
      // Reset form fields but keep success state
      setTimeout(() => {
        setName("");
        setEmail("");
        setSelectedTopics(new Set());
        // Don't reset buttonState - keep it in success state
      }, 3000);
      
    } catch (error) {
      console.error("Error sending message:", error);
      setButtonState('error');
      // Reset to default after 3 seconds
      setTimeout(() => setButtonState('default'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative w-[440px]" data-name="wrapper/form">
      <HeadingQuote />
      <div className="w-full h-[93px]">
        <InputName value={name} onChange={setName} shake={shakeInputs && !name.trim()} />
      </div>
      <div className="w-full h-[93px]">
        <InputMail value={email} onChange={setEmail} shake={shakeInputs && !email.trim()} />
      </div>
      <HeadingSelect />
      <CheckTopicsGrid selectedTopics={selectedTopics} setSelectedTopics={setSelectedTopics} />
      <ButtonSend onClick={handleSend} disabled={isSubmitting} state={buttonState} />
    </div>
  );
}