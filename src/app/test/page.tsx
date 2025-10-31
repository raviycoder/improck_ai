"use client"
import ProgressSteps from "@/components/ui/progress-steps"

const MyPage = () => {
  const profileSteps = [
    "Gathering Profile Details",
    "Analyzing Skills & Experience", 
    "Processing Background Information",
    "Generating Recommendations",
    "Finalizing Profile Setup"
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Profile Setup</h1>
      
      <ProgressSteps
          steps={profileSteps}
          stepDelay={2000} // 2 seconds per step
          autoStart={true}
          onComplete={() => console.log('All steps completed!')}
          className="max-w-lg"
      />
    </div>
  )
}

export default MyPage