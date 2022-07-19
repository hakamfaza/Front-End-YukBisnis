import React from 'react';
import PrimaryButton from '../button/btn-primary';
import TextArea from '../input/text-area-input';
import TextInput from '../input/text-input';
import UrlInput from '../input/url.input';
import SelectOption from '../input/select-input';

import cancel from '../../assets/icon/cancel.png';

export default function ModalsForms(params) {
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
  );
}
