export default function ImageSection({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="w-full dark:border-b-0 border-b-regular border-b-lightSlate">
      <img src={image} alt={alt} className="h-[240px] w-full object-cover object-center" />
    </div>
  );
}
