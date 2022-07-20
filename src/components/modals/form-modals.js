import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PrimaryButton from '../button/btn-primary';
import TextArea from '../input/text-area-input';
import TextInput from '../input/text-input';
import UrlInput from '../input/url.input';
import SelectOption from '../input/select-input';

import cancel from '../../assets/icon/cancel.png';

export default function ModalsForms(params) {
  const { id } = useParams();

  const [isModal, setIsModal] = useState(false);
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
      // setId(Math.floor(Math.random() * (max - min + 1)) + min);

      console.log(getForm);

      axios
        .put(`${process.env.REACT_APP_API_URL}/store/${id}`, getForm, {})
        .then(response => {
          console.log(response.data);
          localStorage.setItem('id', response.data.id);
          // navigate('/profile');
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
        <button type="button" className="flex justify-items-end mt-[-23px] mr-3 cursor-pointer" onClick={params.close}>
          <img src={cancel} alt="" />
        </button>
      </div>
      <div className="px-4">
        <form>
          <h1 className="font-poppins font- font-semibold mb-4 text-lg">Data Toko</h1>
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
        <SelectOption id="category" title="Kategori Bisnis" default="Pilih Kategori Bisnis" />
        <SelectOption id="saluran" title="Saluran Penjualan Utama" default={getProfile.sales_channel} />
        <PrimaryButton title="Simpan" onClick={() => onSubmit()} />
      </div>
    </div>
  );
}
