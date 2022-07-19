import React from 'react';
import logo from '../assets/img/logo.png';
import store from '../assets/img/store.png';
import SecondaryButton from '../components/button/btn-secondary';

export default function Profile() {
  return (
    <div className="bg-neutral flex justify-center">
      <div className="bg-white w-[646px] pb-10 pl-12 pr-12">
        <div className="flex justify-center items-center flex-col p-12 pt-10">
          <img src={logo} alt="" className="w-20" />
          <h1 className="font-poppins font-bold text-2xl mt-6">Selamat Datang di Yubipro</h1>
          <p className="font-lato text-black-60 text-sm mt-2">Lengkapi data toko untuk membuat toko online.</p>
        </div>
        <div className="rounded border-solid border border-black-20">
          <div className="bg-blue-10 flex px-4 py-6 items-center">
            <img src={store} alt="" className="w-14 h-14 rounded-full" />
            <div className="ml-4">
              <h1 className="font-poppins text-base font-semibold">Toko Sepatuku</h1>
              <p className="font-lato text-sm text-blue ">tokosepatuku.yukbisnis.webisite</p>
            </div>
          </div>
          <div className="py-6 px-4">
            <h1 className="font-lato text-sm text-black-60 mb-1 cursor-pointer">Detail Alamat</h1>
            <p className="font-lato text-base">
              Jl. Mawar Wangi , Perumahan Tatar Wangsakerta, Kota Baru Parahyangan, Wangsaningrat No. 16, Kec.
              Padalarang, Kab. Bandung Barat, Jawa Barat
            </p>
            <h1 className="font-lato text-sm text-black-60 mb-1 cursor-pointer mt-4">Kode Pos</h1>
            <p className="font-lato text-base">552345</p>

            <h1 className="font-lato text-sm text-black-60 mb-1 cursor-pointer mt-4">Kategori Bisnis</h1>
            <p className="font-lato text-base">552345</p>

            <h1 className="font-lato text-sm text-black-60 mb-1 cursor-pointer mt-4">Saluran Penjualan</h1>
            <p className="font-lato text-base">552345</p>
          </div>
        </div>
        <SecondaryButton title="Ubah" />
      </div>
    </div>
  );
}
