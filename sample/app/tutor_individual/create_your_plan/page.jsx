"use client"
import {useState} from 'react'
import './styles/plans.css'
import SideNavBar from '../GlobalComponents/SideNavBar/SideNavBar'
import TopBar from '../GlobalComponents/TopBar/TopBar'
import PlanDetails  from './subComponents/PlanDetails/PlanDetails'
import PlanOverView from './subComponents/PlanOverview/PlanOverView'
import CreateYourPlan from './subComponents/CreateYourPlan/CreateYourPlan'
import ChooseYourPlan from './subComponents/Instructions/ChooseYourPlan'
import ProfilePanel from '../GlobalComponents/ProfilePanel/ProfilePanel'
import { useSelector } from 'react-redux'

import Axios from '../../Axios/Axios'

const CreateYourPlanPage = () => {

  const { PlanCardShrink, AddPlan ,isChooseYourPlan,isPlanSelected} = useSelector((state) => state.CreateYourPlan);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [navigation , SetNavigation ] = useState("Class");

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    
    

  
  return (
    <div className='Wrapper'>
      
      <SideNavBar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <div className='Plans__page'>
        <TopBar/>
        <div className='Main_Div_Contains_PlanDetails_and_PlanOverview'>
          <PlanDetails navigation={navigation} SetNavigation={SetNavigation}/>
           <div className='Separation_Line'>

           </div>
           {/* <=== Shifts Beetween "Choose your plan" to "PlanOverView" and "Create Your Plan" , When Users Clicks any of the PlanCards ===> */}
           {
            isChooseYourPlan 
            ?
            isPlanSelected ?
            <PlanOverView/>
            :
            <CreateYourPlan navigation={navigation} SetNavigation={SetNavigation}/>
            :
            isPlanSelected ?
              <PlanOverView/>
              :
              <ChooseYourPlan/>
           }
        </div>
      </div>
      {PlanCardShrink &&
      <ProfilePanel toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      }
    </div>
  )
}

export default CreateYourPlanPage