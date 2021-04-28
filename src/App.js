import DownloadResume from './components/DownloadResume'
import EducationalInfo from './components/EducationalInfo'
import HeaderComponent from './components/HeaderComponent'
import HonorsAndAchievements from './components/HonorsAndAchievements'
import PersonalInfo from './components/PersonalInfo'
import SkillsInfo from './components/SkillsInfo'
import ThemeComponent from './components/ThemeComponent'
import WorkExperience from './components/WorkExperience'
import { RESUME_DATA } from './resumeData'

const App = () => {
  const { self, workExperience, skillsInfo, educationalInfo, honorsAndAchievements, personalInfo } = RESUME_DATA

  return (
    <main>
      <ThemeComponent />
      <DownloadResume />
      <HeaderComponent data={self}/>
      <WorkExperience data={workExperience}/>
      <SkillsInfo data={skillsInfo}/>
      <EducationalInfo data={educationalInfo}/>
      <HonorsAndAchievements data={honorsAndAchievements} />
      <PersonalInfo data={personalInfo}/>
    </main>
  );
}

export default App;
