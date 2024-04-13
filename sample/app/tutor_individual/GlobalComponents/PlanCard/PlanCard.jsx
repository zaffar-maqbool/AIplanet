import './styles/PlanCard.css'
import View_Icon from './Assets/Views.svg'
import Success_rate from './Assets/Success_rate.svg'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { setPlanSelected } from '../../../Redux/tutorSlices/CreateYourPlan'
import { useState } from 'react'

const PlanCard = ({plan,index}) => {
    const dispatch = useDispatch();
    const { PlanCardShrink,isChooseYourPlan,PlanSelected, PlanOnCLick  } = useSelector((state) => state.CreateYourPlan);

    const [planCardSelect, setPlanCardSelected] = useState(false);
    
  return (
    isChooseYourPlan ?
    <div className={PlanCardShrink ? 'Shrinked_PlanCard_wrapper' : 'PlanCard_wrapper'} onClick={() => setPlanCardSelected(!planCardSelect) }>
        <div className='Card_top' style={{ backgroundColor: plan.color }}></div>
        <div className={PlanCardShrink ?'Shrinked_Card_background':'Card_background'}>
            {/* <=== Card Section 1  ===> Contains: Section,Class,Subjects,Cost*/}
        <div className='Class_Subjects_and_price_Div'>
            <h4 style={{ color: plan.color }}>
                A
            </h4>
            <div className='class_and_subjects'>
               <div> <p>Class 10</p> <p>On Proposal</p> </div>
                
                <h4>Maths, Science + 3</h4>
            </div>
            <div className='price' style={{ backgroundColor: plan.color + '99'}}>
                <h4>₹ 200</h4>
                <p>Per hour</p>
            </div>
        </div>
                    {/* <=== Card Section 2  ===> 
                    Contains: Section,Class,Subjects,Cost */}
            {
                planCardSelect &&
            <div className='View_and_Success_rate'>
                <div className='Views'>
                    <Image src={View_Icon} alt='view'/>
                        <div>
                            <p>Views</p>
                            <h4>2.5k</h4>
                        </div>
                </div>
                <div></div>
                <div className='Success_rate'>
                    <Image src={Success_rate} alt='succecc rate'/>
                        <div>
                            <p>Success Rate</p>
                            <h4>8.6%</h4>
                        </div>
                </div>
            </div>
            }
        
                {/* <=== Card Section 3  ===> 
                        Contains: Section,Class,Subjects,Cost */}
            {
                planCardSelect &&
            <div className='Class_occupancy'>
            <div>
                <div className='Class_Occupancy_and_Capacity'>
                    <p>Class Occupancy</p>
                    <span></span>
                    <span>Capacity: <p>01</p> </span>
                </div>
                <div className='progress_bar'>
                    <h4>20%</h4>
                    <div>
                        <div style={{width:'20%'}}></div>
                    </div>
                </div>
            </div>
            <button onClick={(e) =>{
                e.stopPropagation()
                dispatch(setPlanSelected({boolean: true, plan : plan}));
        
            }}>Select</button>
            </div>
            }
        </div>
        </div>
    :<>
     <div className={PlanCardShrink ? 'Shrinked_PlanCard_wrapper' : 'PlanCard_wrapper'}>
        <div className='Card_top'  style={{ backgroundColor: plan.color }}></div>
        <div className={PlanCardShrink ?'Shrinked_Card_background':'Card_background'}>
            {/* <=== Card Section 1  ===> Contains: Section,Class,Subjects,Cost*/}
        <div className='Class_Subjects_and_price_Div'>
            <h4 style={{ color: plan.color }}>
                A
            </h4>
            <div className='class_and_subjects'>
               <div> <p>Class 10</p> <p>On Proposal</p> </div>
                
                <h4>Maths, Science + 3</h4>
            </div>
            <div className='price' style={{ backgroundColor: plan.color + '99'}}>
                <h4>₹ 200</h4>
                <p>Per hour</p>
            </div>
        </div>
       
        {/* <=== Card Section 2  ===> 
                Contains: Section,Class,Subjects,Cost */}
            <div className='View_and_Success_rate'>
                <div className='Views'>
                    <Image src={View_Icon} alt='view' />
                        <div>
                            <p>Views</p>
                            <h4>2.5k</h4>
                        </div>
                </div>
                <div></div>
                <div className='Success_rate'>
                    <Image src={Success_rate} alt='success rate'/>
                        <div>
                            <p>Success Rate</p>
                            <h4>8.6%</h4>
                        </div>
                </div>
        </div>
        
        {/* <=== Card Section 3  ===> 
                Contains: Section,Class,Subjects,Cost */}
        <div className='Class_occupancy'>
            <div>
                <div className='Class_Occupancy_and_Capacity'>
                    <p>Class Occupancy</p>
                    <span></span>
                    <span>Capacity: <p>01</p> </span>
                </div>
                <div className='progress_bar'>
                    <h4>20%</h4>
                    <div>
                        <div style={{width:'20%'}}></div>
                    </div>
                </div>
            </div>
            <button onClick={() =>{
                 dispatch(setPlanSelected({boolean: true, plan : plan}));
            }}>Select</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default PlanCard