export interface ExternalLinkProps {
  link: string;
  className?: string;
  children: React.ReactNode;
}

export default function ExternalLink({ link, className, children }: ExternalLinkProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}
