import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]){
    const [currentStepIndex, setCurrentStateIndex] = useState(0)

    function next(){
        setCurrentStateIndex(i =>{
            if(i > steps.length - 1) return i
            return i + 1
        })
    }

    function back(){
        setCurrentStateIndex(i =>{
            if(i <= 0) return i
            return i - 1
        })
    }

    function goTo(index: number){
        setCurrentStateIndex(index)
    }

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        goTo,
        back,
        next,
        steps,
        isFirstStep: currentStepIndex !== 0,
        isLastStep: currentStepIndex === steps.length - 1,
    }
}