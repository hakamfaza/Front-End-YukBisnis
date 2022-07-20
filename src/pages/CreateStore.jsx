import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/img/logo.png';
import PrimaryButton from '../components/button/btn-primary';
import TextArea from '../components/input/text-area-input';
import TextInput from '../components/input/text-input';
import UrlInput from '../components/input/url.input';

export default function CreateStore() {
  const navigate = useNavigate();
  const [getCategory, setCategory] = useState([]);
  const [getChannel, setChannel] = useState([]);

  const max = 200;
  const min = 100;
  const [getId, setId] = useState();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/categories`).then(response => {
      setCategory(response.data);
    });

    axios.get(`${process.env.REACT_APP_API_URL}/sales_channels`).then(response => {
      setChannel(response.data);
    });
  }, []);

  const [getForm, setForm] = useState({
    name: '',
    url: '',
    address: '',
    category: '',
    postal: '',
    sales_channel: ''
    // id: 50
  });

  const onChange = (e, field) => {
    e.preventDefault();
    setForm({
      ...getForm,
      [field]: e.target.value
    });
  };

  const onSubmit = () => {
    try {
      // setId(Math.floor(Math.random() * (max - min + 1)) + min);

      // console.log(getForm);

      axios
        .post(`${process.env.REACT_APP_API_URL}/store`, getForm, {})
        .then(response => {
          console.log(response);
          localStorage.setItem('id', getForm.id);
          navigate('/profile');
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-neutral flex justify-center">
      <div className="bg-white w-[646px] pb-10">
        <div className="flex justify-center items-center flex-col p-12 pt-10">
          <img src={logo} alt="" className="w-20" />
          <h1 className="font-poppins font-bold text-2xl mt-6">Selamat Datang di Yubipro</h1>
          <p className="font-lato text-black-60 text-sm mt-2">Lengkapi data toko untuk membuat toko online.</p>
        </div>
        <div className="pl-12 pr-12">
          <form>
            <h1 className="font-poppins font- font-semibold mb-4 text-lg">Data Toko</h1>
            <TextInput
              placeholder="Masukan Nama Toko"
              id="name"
              type="text"
              title="Nama Toko"
              onChange={e => onChange(e, 'name')}
            />
            <UrlInput placeholder="Masukan URL Toko" title="URL Toko" id="url" onChange={e => onChange(e, 'url')} />
            <TextArea
              placeholder="Masukkan Jalan, No Rumah/Gedung, RT/RW, Desa/Kelurahan, Kecamatan, Kabupaten, Provinsi"
              title="Alamat"
              id="alamat"
              onChange={e => onChange(e, 'address')}
            />
            <TextInput
              placeholder="Masukan Kode POS"
              id="pos"
              type="text"
              title="Kode POS"
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
              {/* {getCategory.length >= 0 ? getCategory.map(item => <option value={item}>{item}</option>) : null} */}
            </select>
          </div>

          <div className="mt-2">
            <label htmlFor="category" className="font-lato text-sm text-black-60 mb-1 cursor-pointer">
              Saluran Penjualan Utama
            </label>
            <select
              id="channel"
              onChange={e => onChange(e, 'sales_channel')}
              className="bg-black-5 border-solid border border-black-20 py-2 px-4 rounded text-black placeholder-shown:text-black-20 text-base w-full"
            >
              <option>Pilih Saluran Penjualan Utama</option>
              {/* {getChannel.length >= 0 ? getChannel.map(item => <option value={item}>{item}</option>) : null} */}
            </select>
          </div>

          <PrimaryButton title="Simpan" onClick={() => onSubmit()} />
        </div>
      </div>
    </div>
  );
}
