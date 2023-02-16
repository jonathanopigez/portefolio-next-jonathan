import type { GetStaticProps } from 'next';
import About from '@/components/About';
import Competences from '@/components/Competences';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Profile from '@/components/Profile';
import Projets from '@/components/Projets';
import WorkExperience from '@/components/WorkExperience';
import Head from 'next/head';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/solid';
import { competence, experience, PageInfo, projet, skill } from '@/typings';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchExperiences } from '@/utils/fetchExperiences';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchProjets } from '@/utils/fetchProjets';
import { fetchCompetences } from '@/utils/fetchCompetences';
import Menu from '@/components/Menu';




type Props = {
  pageInfo: PageInfo;
  experiences: experience[];
  skills:skill[];
  projets: projet[];
  competences:competence[];
 
}



const Home = ( {pageInfo, experiences, projets, skills, competences}: Props) => {




  return (
 
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden md:overflow-swipe z-0 md:scrollbar-none scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#C282FA]/40 '>
      <Head>
        <title>Portefolio - Jonathan Opigez</title>
      </Head>

   
      <Header />
  {/*Home*/}
        <section id="home" className='snap-start'>
          <Profile pageInfos={pageInfo} />
        </section>
  {/*A propos*/}
        <section id="about" className='snap-center'>
          <About pageInfos={pageInfo} />
        </section>


        <section id="experiences" className='snap-center'>
          <WorkExperience experiences={experiences} />
        </section>
 
        <section id="competences" className="snap-start">
          <Competences skills={skills} />
        </section>

        <section id="projets" className="snap-start">
          <Projets projets={projets} />
        </section>
 
        <section id="contact" className="snap-start">
          <Contact />
        </section>

     

          <Menu />

  
        
          <Link href="#home">
              <footer className='sticky bottom-5 w-full cursor-pointer'>
                <div className='flex items-center justify-center'>
                    <HomeIcon className=' opacity-20 h-10 w-10 rounded-full filter hover:text-[#C282FA] transition-colors cursor-pointer hover:h-12 hover:w-12 hover:opacity-80'/>
                </div>
              </footer>

          </Link>


    </div>
  )
}


export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: experience[] = await fetchExperiences();
  const skills: skill[] = await fetchSkills();
  const projets: projet[]= await fetchProjets();
  const competences: competence[] = await fetchCompetences();


  return{
    props:{
      pageInfo,
      experiences,
      skills,
      projets,
      competences,
    },

    revalidate: 10,
  }
}
export default Home;