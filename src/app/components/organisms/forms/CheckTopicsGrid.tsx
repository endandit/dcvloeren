import { CheckboxParket } from "../../molecules/checkboxes/CheckboxParket";
import { CheckboxLaminaat } from "../../molecules/checkboxes/CheckboxLaminaat";
import { CheckboxPvc } from "../../molecules/checkboxes/CheckboxPvc";
import { CheckboxMicrocement } from "../../molecules/checkboxes/CheckboxMicrocement";
import { CheckboxTraptreden } from "../../molecules/checkboxes/CheckboxTraptreden";
import { CheckboxRenovatie } from "../../molecules/checkboxes/CheckboxRenovatie";
import { CheckboxAkoestiek } from "../../molecules/checkboxes/CheckboxAkoestiek";
import { CheckboxInterieur } from "../../molecules/checkboxes/CheckboxInterieur";

type TopicId = 'parket' | 'laminaat' | 'pvc' | 'microcement' | 'traptreden' | 'renovatie' | 'akoestiek' | 'interieur';

function Row1({ selectedTopics, onToggle }: { selectedTopics: Set<TopicId>; onToggle: (id: TopicId) => void }) {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="row/1">
      <CheckboxParket isSelected={selectedTopics.has('parket')} onToggle={() => onToggle('parket')} />
      <CheckboxLaminaat isSelected={selectedTopics.has('laminaat')} onToggle={() => onToggle('laminaat')} />
    </div>
  );
}

function Row2({ selectedTopics, onToggle }: { selectedTopics: Set<TopicId>; onToggle: (id: TopicId) => void }) {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="row/2">
      <CheckboxPvc isSelected={selectedTopics.has('pvc')} onToggle={() => onToggle('pvc')} />
      <CheckboxMicrocement isSelected={selectedTopics.has('microcement')} onToggle={() => onToggle('microcement')} />
    </div>
  );
}

function Row3({ selectedTopics, onToggle }: { selectedTopics: Set<TopicId>; onToggle: (id: TopicId) => void }) {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="row/3">
      <CheckboxTraptreden isSelected={selectedTopics.has('traptreden')} onToggle={() => onToggle('traptreden')} />
      <CheckboxRenovatie isSelected={selectedTopics.has('renovatie')} onToggle={() => onToggle('renovatie')} />
    </div>
  );
}

function Row4({ selectedTopics, onToggle }: { selectedTopics: Set<TopicId>; onToggle: (id: TopicId) => void }) {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="row/4">
      <CheckboxAkoestiek isSelected={selectedTopics.has('akoestiek')} onToggle={() => onToggle('akoestiek')} />
      <CheckboxInterieur isSelected={selectedTopics.has('interieur')} onToggle={() => onToggle('interieur')} />
    </div>
  );
}

interface CheckTopicsGridProps {
  selectedTopics: Set<TopicId>;
  setSelectedTopics: React.Dispatch<React.SetStateAction<Set<TopicId>>>;
}

export function CheckTopicsGrid({ selectedTopics, setSelectedTopics }: CheckTopicsGridProps) {
  const handleToggle = (id: TopicId) => {
    setSelectedTopics((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="bg-[#f0f0f0] content-stretch flex flex-col gap-[24px] items-start justify-center overflow-clip p-[24px] relative shrink-0 w-[440px]" data-name="check/topics">
      <Row1 selectedTopics={selectedTopics} onToggle={handleToggle} />
      <Row2 selectedTopics={selectedTopics} onToggle={handleToggle} />
      <Row3 selectedTopics={selectedTopics} onToggle={handleToggle} />
      <Row4 selectedTopics={selectedTopics} onToggle={handleToggle} />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_24px_24px_0px_0px_rgba(255,255,255,0.5),inset_-24px_-24px_0px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}