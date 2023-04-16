import React, {useState, useEffect} from 'react';
import { useStateContext } from '../context';
import DisplayCampaigns from '../components/DisplayCampaigns';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([])
  const {address, contract, getCampaign} = useStateContext(); 

  const fetchCampagins = async () => {
    setIsLoading(true);
    const data = await getCampaign();
    setCampaigns(data);
    setIsLoading(false)
  }

  useEffect(() => {
    if(contract) fetchCampagins();
  }, [address, contract]);

  return (
   <DisplayCampaigns
   title="All Campaigns"
   isLoading={isLoading}
   campaigns={campaigns}/>
  )
}

export default Home
