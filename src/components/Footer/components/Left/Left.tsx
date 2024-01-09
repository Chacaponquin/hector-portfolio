import { Copyright } from '../../../../modules/icon/components';

export default function Left() {
  return (
    <div className="flex justify-center w-max">
      <div className="flex items-center text-xl gap-x-2 fill-white text-center esm:text-lg">
        <p>Handcrafted by me</p> <Copyright size={28} /> <p>Chacaponquin</p>
      </div>
    </div>
  );
}
