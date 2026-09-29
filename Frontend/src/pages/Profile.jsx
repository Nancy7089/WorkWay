import {useState,useEffect}  from 'react';
import {authApi} from '../services/api.js';
function Profile(){
    const [targetRoles,settargetRoles]=useState('');
    const [skills,setSkills]=useState('');
    const [experienceLevel,setexperienceLevel]=useState('Entry-level');
    const [minSalary, setMinSalary] = useState('');
    const [maxSalary, setMaxSalary] = useState('');
    const [bio, setBio] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isSaving, setIsSaving] = useState(false);


}

export default Profile;