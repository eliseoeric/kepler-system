interface ILogoProps {
  alt: string;
  src: string;
  href: string;
}

const Component = ({
  alt,
  src = 'https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=300',
  href,
}: ILogoProps) => {
  return (
    <div className="absolute left-0 shrink-0 lg:static">
      <a href={href}>
        <span className="sr-only">{alt}</span>
        <img alt={alt} src={src} className="h-8 w-auto" />
      </a>
    </div>
  );
};

export default Component;
