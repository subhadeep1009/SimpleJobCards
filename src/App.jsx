import './App.css'
import Card from './Components/Card'
const App = () => {
  const jobOpenings = [
  {
    brandLogo: "/images/googleLogo.webp",
    companyName: "Google",
    post: "Frontend Engineer",
    datePosted: "2 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    salary: "$45/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "/images/meta_logo.png",
    companyName: "Meta",
    post: "Backend Engineer",
    datePosted: "5 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    salary: "$65/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "/images/amazonLogo.webp",
    companyName: "Amazon",
    post: "UI/UX Designer",
    datePosted: "1 week ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    salary: "$40/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "/images/AppleLogo.webp",
    companyName: "Apple",
    post: "iOS Developer",
    datePosted: "3 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    salary: "$70/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "/images/netflix-logo.jpg",
    companyName: "Netflix",
    post: "Full Stack Developer",
    datePosted: "2 weeks ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    salary: "$80/hour",
    location: "Remote, India"
  },
  {
    brandLogo: "/images/MicrosoftLogo.webp",
    companyName: "Microsoft",
    post: "Cloud Engineer",
    datePosted: "4 days ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    salary: "$55/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "/images/TeslaLogo.webp",
    companyName: "Tesla",
    post: "AI Engineer",
    datePosted: "6 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    salary: "$75/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "/images/NVDIALogo.webp",
    companyName: "NVIDIA",
    post: "Machine Learning Engineer",
    datePosted: "1 day ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    salary: "$60/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "/images/IBMLogo.jpg",
    companyName: "IBM",
    post: "Backend Developer",
    datePosted: "1 week ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    salary: "$35/hour",
    location: "Kolkata, India"
  },
  {
    brandLogo: "/images/oracleLogo.png",
    companyName: "Oracle",
    post: "DevOps Engineer",
    datePosted: "3 weeks ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    salary: "$50/hour",
    location: "Noida, India"
  }
];


  return (
    <div className='parent'>
      {jobOpenings.map(function(elem){
        return <Card company={elem.companyName} post={elem.post} location={elem.location} salary={elem.salary} datePosted={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} brandLogo={elem.brandLogo} />
      })}
    </div>
    
  )
}

export default App
