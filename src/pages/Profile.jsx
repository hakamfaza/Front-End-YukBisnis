import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import store from '../assets/img/store.png';
import SecondaryButton from '../components/button/btn-secondary';
import ModalsForms from '../components/modals/form-modals';

export default function Profile() {
  const { id } = useParams();

  const [isModal, setIsModal] = useState(false);
  const [getProfile, setProifle] = useState({});

  useEffect(() => {
    axios.put(`${process.env.REACT_APP_API_URL}/store/${id}`).then(response => {
      setProifle(response.data);
    });
  }, []);

  return (
    <div className="bg-neutral flex justify-center">
      <div className="bg-white w-[646px] pb-10 pl-12 pr-12">
        <div className="flex justify-center items-center flex-col p-12 pt-10">
          <img src={logo} alt="" className="w-20" />
          <h1 className="font-poppins font-bold text-2xl mt-6">Toko Berhasil Dibuat!</h1>
          <p className="font-lato text-black-60 text-sm mt-2">Berikut adalah detail data toko Anda.</p>
        </div>
        <div className="rounded border-solid border border-black-20">
          {getProfile ? (
            <div>
              <div className="bg-blue-10 flex px-4 py-6 items-center">
                <img src={store} alt="" className="w-14 h-14 rounded-full" />
                <div className="ml-4">
                  <h1 className="font-poppins text-base font-semibold">{getProfile.name}</h1>
                  <p className="font-lato text-sm text-blue ">{getProfile.url}.yukbisnis.webisite</p>
                </div>
              </div>
              <div className="py-6 px-4">
                <h1 className="font-lato text-sm text-black-60 mb-1 cursor-pointer">Detail Alamat</h1>
                <p className="font-lato text-base">{getProfile.address}</p>
                <h1 className="font-lato text-sm text-black-60 mb-1 cursor-pointer mt-4">Kode Pos</h1>
                <p className="font-lato text-base">{getProfile.postal}</p>

                <h1 className="font-lato text-sm text-black-60 mb-1 cursor-pointer mt-4">Kategori Bisnis</h1>
                <p className="font-lato text-base">{getProfile.category}</p>

                <h1 className="font-lato text-sm text-black-60 mb-1 cursor-pointer mt-4">Saluran Penjualan</h1>
                <p className="font-lato text-base">{getProfile.sales_channel}</p>
              </div>
            </div>
          ) : null}
        </div>
        <SecondaryButton title="Ubah" onClick={() => setIsModal(true)} />
      </div>
      {isModal ? (
        <>
          <div className="bg-black w-screen flex justify-center fixed h-full items-center opacity-50 overflow-hidden" />
          <div className="absolute left-[340px] top-36">
            <ModalsForms close={() => setIsModal(false)} />
          </div>
        </>
      ) : null}
    </div>
  );
}
