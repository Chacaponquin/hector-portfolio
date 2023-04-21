import { Fragment } from 'react';
import { SectionContainer, SectionHeader } from '../../modules/app/components';
import { SourceCode } from '../../modules/icon/components';

export default function ProjectsSection() {
  return (
    <SectionContainer>
      <Fragment>
        <SectionHeader title="Projects" icon={SourceCode} />
      </Fragment>
    </SectionContainer>
  );
}
