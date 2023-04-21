import { Fragment } from 'react';
import { SectionContainer, SectionHeader } from '../../modules/app/components';
import { GitHub, Share, SourceCode } from '../../modules/icon/components';
import { useProjectSection } from './hooks';

export default function ProjectsSection() {
  const { PROJECTS } = useProjectSection();

  return (
    <SectionContainer>
      <Fragment>
        <SectionHeader title="Projects" icon={SourceCode} />

        <div className="flex flex-wrap w-full gap-x-14 justify-center gap-y-7">
          {PROJECTS.map((p, i) => (
            <div key={i} className="flex flex-col rounded-sm border-2 border-primaryColor max-w-[450px]">
              <div className="w-full">
                <img src={p.image.image} alt={p.image.alt} className="h-[240px] w-full object-cover object-center" />
              </div>

              <div className="flex flex-col py-4 px-7 gap-y-3">
                <div className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequuntur eum dignissimos
                  voluptates in provident dolorem ducimus, similique exercitationem tempora.
                </div>

                <div className="flex flex-wrap w-full gap-x-5">
                  {p.madeWith.map((t) => (
                    <div key={i} className="font-fontCode py-1 px-3 rounded-sm bg-white/20">
                      {t}
                    </div>
                  ))}
                </div>

                <div className="flex w-full justify-end gap-x-6 stroke-white">
                  <GitHub size={22} />
                  <Share size={22} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    </SectionContainer>
  );
}
