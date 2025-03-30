import React, { Suspense } from 'react'
import AboutCard from './_component/aboutCard'
import { InfoIcon, LightbulbIcon, Phone, PhoneIcon, RocketIcon } from 'lucide-react'

import AboutPageSkeleton from './loading'

export default async function AboutPage() {
    return (
        <Suspense fallback={<AboutPageSkeleton />}>
            <div className='w-full h-full grid md:grid-cols-2 gap-10 p-20 sm:grid-cols-1'>
                <AboutCard
                    title='About Us'
                    icon={<InfoIcon />}
                >
                    <div className='flex flex-col gap-2'>
                        <p>Welcome to DIREKSIYON! your guide to navigating the campus with ease!</p>
                        <p>At Western Institute of Technology, we understand how overwhelming it can be for students, staff, and visitors to find their way around a large campus. Our goal is to provide a simple, interactive, and detailed map that helps everyone move through the school’s buildings, grounds, and facilities efficiently.</p>
                    </div>
                </AboutCard>

                <AboutCard
                    title='Contact'
                    icon={<PhoneIcon />}
                >
                    <div className='flex flex-col gap-2'>
                        <div>
                            <p>Business Administration/Arts and Science:</p>
                            <p> (33) 320-0902</p>
                        </div>

                        <div>
                            <p>Engineering Offices: </p>
                            <p>(33) 320 - 9796 / (33) 320- 9853</p>
                        </div>

                        <div>
                            <p>Office of the President: </p>
                            <p>(33) 320-0259 / (33) 508-7151</p>
                        </div>

                        <div className='flex flex-row gap-2 items-center'>
                            <div className='w-1/2'>
                                <p>Office of the Registrar:</p>
                                <p> (34) 320-1475 </p>
                            </div>

                            <div>
                                <p>Guidance Services:</p>
                                <p>09122356643</p>
                            </div>
                        </div>
                    </div>
                </AboutCard>


                <AboutCard
                    title='Mission'
                    icon={<RocketIcon />}
                >
                    <div>
                        <p>At Western Institute of Technology, we’re committed to creating an environment that promotes learning, growth, and community. Our campus is a hub of academic excellence, and we want everyone to feel confident in navigating the spaces that help support their journey. This map is just one of the ways we strive to make your experience at our school smoother, more efficient, and more enjoyable. By providing clear and easy access to building locations, entrances, and important facilities, we hope to ensure that everyone can find their way around without a hitch.</p>
                    </div>
                </AboutCard>

                <AboutCard
                    title='Vision'
                    icon={<LightbulbIcon />}
                >
                    <div>
                        <p>We envision as the go-to web app for every school, transforming how students and staff navigate their campus. By integrating accurate location tracking and a comprehensive campus directory, we aim to foster a more connected and efficient school environment. Our vision is to make campuses experience smoother, safer, and more inclusive, whether you're attending a class or exploring new opportunities.</p>
                    </div>
                </AboutCard>
            </div>
        </Suspense>
    )
}
