import React from 'react';
import logo from '../assets/img/logo.png';
import PrimaryButton from '../components/button/btn-primary';
import TextArea from '../components/input/text-area-input';
import TextInput from '../components/input/text-input';
import UrlInput from '../components/input/url.input';
import SelectOption from '../components/input/select-input';

export default function CreateStore() {
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
            <TextInput placeholder="Masukan Nama Toko" id="name" type="text" title="Nama Toko" />
            <UrlInput placeholder="Masukan URL Toko" title="URL Toko" id="url" />
            <TextArea
              placeholder="Masukkan Jalan, No Rumah/Gedung, RT/RW, Desa/Kelurahan, Kecamatan, Kabupaten, Provinsi"
              title="Alamat"
              id="alamat"
            />
            <TextInput placeholder="Masukan Kode POS" id="pos" type="text" title="Kode POS" />
          </form>
          <div className="flex mt-8 text-center mb-4">
            <h1 className="font-poppins font- font-semibold text-lg">Informasi Bisnis</h1>
            <p className="text-sm text-black-60 text-center mt-1 ml-2"> (Opsional)</p>
          </div>
          <SelectOption id="category" title="Kategori Bisnis" default="Pilih Kategori Bisnis" />
          <SelectOption id="saluran" title="Saluran Penjualan Utama" default="Pilih Saluran Penjualan Utama" />
          <PrimaryButton title="Simpan" />
        </div>
      </div>
    </div>
  );
}
