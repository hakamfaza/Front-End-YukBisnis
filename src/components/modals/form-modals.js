/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import PrimaryButton from '../button/btn-primary';
import TextArea from '../input/text-area-input';
import TextInput from '../input/text-input';
import UrlInput from '../input/url.input';

import cancel from '../../assets/icon/cancel.png';

export default function ModalsForms(params) {
  const { id } = useParams();

  const [getCategory, setCategory] = useState([]);
  const [getChannel, setChannel] = useState([]);
  const [getProfile, setProfile] = useState({});
  const [getForm, setForm] = useState({
    name: getProfile.name,
    url: getProfile.url,
    address: getProfile.address,
    category: getProfile.category,
    postal: getProfile.postal,
    sales_channel: getProfile.sales_channel
  });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/categories`).then(response => {
      setCategory(response.data);
    });

    axios.get(`${process.env.REACT_APP_API_URL}/sales_channels`).then(response => {
      setChannel(response.data);
    });

    axios.put(`${process.env.REACT_APP_API_URL}/store/${id}`).then(response => {
      setProfile(response.data);
      setForm(response.data);
    });
  }, []);

  const onChange = (e, field) => {
    e.preventDefault();
    setForm({
      ...getForm,
      [field]: e.target.value
    });
  };

  console.log(getForm);
  console.log(getProfile.name);

  const onSubmit = () => {
    try {
      axios
        .put(`${process.env.REACT_APP_API_URL}/store/${id}`, getForm, {})
        .then(response => {
          localStorage.setItem('id', response.data.id);
          window.location.reload();
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative w-5/12 bg-white h-[500px] overflow-auto rounded-md opacity-1 pb-3">
      <div className="shadow py-4">
        <div className="flex justify-center">
          <h1 className="font-poppins text-lg font-semibold">Ubah Data Toko</h1>
        </div>
        <button
          type="button"
          className=" bg-primary w-full flex justify-items-end mr-3 cursor-pointer items-end relative"
          onClick={params.close}
        >
          <img src={cancel} alt="" className="absolute right-4 top-[-20px]" />
        </button>
      </div>
      <div className="px-4">
        <form>
          <h1 className="font-poppins font- font-semibold mb-4 text-lg mt-2">Data Toko</h1>
          <TextInput
            placeholder="Masukan Nama Toko"
            id="name"
            type="text"
            title="Nama Toko"
            defaultValue={getProfile.name}
            onChange={e => onChange(e, 'name')}
          />
          <UrlInput
            placeholder="Masukan URL Toko"
            title="URL Toko"
            id="url"
            defaultValue={getProfile.url}
            onChange={e => onChange(e, 'url')}
          />
          <TextArea
            placeholder="Masukkan Jalan, No Rumah/Gedung, RT/RW, Desa/Kelurahan, Kecamatan, Kabupaten, Provinsi"
            title="Alamat"
            id="alamat"
            defaultValue={getProfile.address}
            onChange={e => onChange(e, 'address')}
          />
          <TextInput
            placeholder="Masukan Kode POS"
            id="pos"
            type="text"
            title="Kode POS"
            defaultValue={getProfile.postal}
            onChange={e => onChange(e, 'postal')}
          />
        </form>
        <div className="flex mt-8 text-center mb-4">
          <h1 className="font-poppins font- font-semibold text-lg">Informasi Bisnis</h1>
          <p className="text-sm text-black-60 text-center mt-1 ml-2"> (Opsional)</p>
        </div>

        <div className="mt-2">
          <label htmlFor="category" className="font-lato text-sm text-black-60 mb-1 cursor-pointer">
            Kategori Bisnis
          </label>
          <select
            id="category"
            onChange={e => onChange(e, 'category')}
            className="bg-black-5 border-solid border border-black-20 py-2 px-4 rounded text-black placeholder-shown:text-black-20 text-base w-full"
          >
            <option>Pilih Kategori Bisnis</option>
            {getCategory.length >= 0 ? getCategory.map(item => <option value={item.name}>{item.name}</option>) : null}
          </select>
        </div>

        <div className="mt-2">
          <label htmlFor="category" className="font-lato text-sm text-black-60 mb-1 cursor-pointer ">
            Saluran Penjualan Utama
          </label>
          <select
            id="channel"
            onChange={e => onChange(e, 'sales_channel')}
            className="bg-black-5 border-solid border border-black-20 py-2 px-4 rounded text-black placeholder-shown:text-black-20 text-base w-full"
          >
            <option className="hover:bg-primary active:bg-primary">Pilih Saluran Penjualan Utama</option>
            {getChannel.length >= 0
              ? getChannel.map(item => (
                  <option value={item.name} className="hover:bg-primary">
                    {item.name}
                  </option>
                ))
              : null}
          </select>
        </div>

        <PrimaryButton title="Simpan" onClick={() => onSubmit()} />
      </div>
    </div>
  );
}
