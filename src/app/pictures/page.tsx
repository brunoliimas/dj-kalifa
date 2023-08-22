'use client'
import React, { useState } from "react";
import Image from "next/image";
import Modal from 'react-modal';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import { IoMdArrowBack } from 'react-icons/io'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const picList = ["IMG_1.jpg", "IMG_2.jpg", "IMG_3.jpg", "IMG_4.jpg", "IMG_5.jpg", "IMG_6.jpg", "IMG_7.jpg", "IMG_8.jpg", "IMG_9.jpg", "IMG_10.jpg", "IMG_11.jpg", "IMG_12.jpg", "IMG_13.jpg", "IMG_14.jpg", "IMG_15.jpg", "IMG_16.jpg", "IMG_17.jpg", "IMG_18.jpg", "IMG_19.jpg", "IMG_20.jpg", "IMG_21.jpg", "IMG_22.jpg", "IMG_23.jpg", "IMG_24.jpg", "IMG_25.jpg", "IMG_26.jpg", "IMG_27.jpg", "IMG_28.jpg", "IMG_29.jpg", "IMG_30.jpg", "IMG_31.jpg", "IMG_32.jpg", "IMG_33.jpg", "IMG_34.jpg", "IMG_35.jpg", "IMG_36.jpg", "IMG_37.jpg", "IMG_38.jpg", "IMG_39.jpg", "IMG_40.jpg", "IMG_41.jpg", "IMG_42.jpg", "IMG_43.jpg", "IMG_44.jpg", "IMG_45.jpg", "IMG_46.jpg", "IMG_47.jpg", "IMG_48.jpg", "IMG_49.jpg", "IMG_50.jpg", "IMG_51.jpg", "IMG_52.jpg", "IMG_53.jpg", "IMG_54.jpg", "IMG_55.jpg", "IMG_56.jpg", "IMG_57.jpg", "IMG_58.jpg", "IMG_59.jpg", "IMG_60.jpg", "IMG_61.jpg", "IMG_62.jpg", "IMG_63.jpg", "IMG_64.jpg", "IMG_65.jpg", "IMG_66.jpg", "IMG_67.jpg", "IMG_68.jpg", "IMG_69.jpg", "IMG_70.jpg", "IMG_71.jpg", "IMG_72.jpg", "IMG_73.jpg", "IMG_74.jpg", "IMG_75.jpg", "IMG_76.jpg", "IMG_77.jpg", "IMG_78.jpg", "IMG_79.jpg", "IMG_80.jpg", "IMG_81.jpg", "IMG_82.jpg", "IMG_83.jpg", "IMG_84.jpg", "IMG_85.jpg", "IMG_86.jpg", "IMG_87.jpg", "IMG_88.jpg", "IMG_89.jpg", "IMG_90.jpg", "IMG_91.jpg", "IMG_92.jpg", "IMG_93.jpg", "IMG_94.jpg", "IMG_95.jpg", "IMG_96.jpg", "IMG_97.jpg", "IMG_98.jpg", "IMG_99.jpg", "IMG_100.jpg", "IMG_101.jpg", "IMG_102.jpg", "IMG_103.jpg", "IMG_104.jpg", "IMG_105.jpg", "IMG_106.jpg", "IMG_107.jpg", "IMG_108.jpg", "IMG_109.jpg", "IMG_110.jpg", "IMG_111.jpg", "IMG_112.jpg", "IMG_113.jpg", "IMG_114.jpg", "IMG_115.jpg", "IMG_116.jpg", "IMG_117.jpg", "IMG_118.jpg", "IMG_119.jpg", "IMG_120.jpg", "IMG_121.jpg", "IMG_122.jpg", "IMG_123.jpg",
];

export default function Pages() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [visibleImages, setVisibleImages] = useState(12);
    const [loading, setLoading] = useState(false);

    const openModal = (index: number) => {
        setSelectedImageIndex(index);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    const loadMoreImages = () => {
        setLoading(true);
        setTimeout(() => {
            setVisibleImages(prevVisibleImages => prevVisibleImages + 12);
            setLoading(false);
        }, 1000);
    };
    const displayedImages = picList.slice(0, visibleImages);

    return (
        <>
            <header className="z-30 py-10">
                <div className="container">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <Image
                            className="mt-8 md:mt-0"
                            src="/grafitti-kalifa.svg"
                            alt="Dj Kalifa"
                            width={270}
                            height={40}
                        />
                        <Link href="/" className="font-semibold flex items-center hover:text-pink-600 transition-all duration-500">
                            <IoMdArrowBack size={24} className="mr-2" />
                            Voltar
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                <section className="w-full py-10">
                    <div className="container">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="w-full md:w-1/2">
                                <h2 className="text-3xl md:text-6xl font-semibold">
                                    <span className="text-pink-600">Capturando Batidas:</span> O Universo Sonoro de DJ Kalifa em Imagens Vibrantes
                                </h2>
                            </div>
                            <div className="w-full md:w-1/2">
                                <Image
                                    src="/galery/capa-fotos.jpg"
                                    alt="Capa galery"
                                    width={710}
                                    height={710}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
                            {displayedImages.map((pic, index) => (
                                <div
                                    key={index}
                                    className="cursor-pointer"
                                    onClick={() => openModal(index)}
                                >
                                    <Image
                                        src={`/galery/${pic}`}
                                        alt="Capa galeria"
                                        width={710}
                                        height={710}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-8">
                            <button
                                onClick={loadMoreImages}
                                className="bg-pink-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-pink-700 transition-colors"
                                disabled={loading} // Desativar o botão durante o carregamento
                            >
                                {loading ? (
                                    <div className="flex items-center font-semibold">
                                        <AiOutlineLoading3Quarters size={30} className="animate-spin mr-2" />
                                        Carregando...
                                    </div>
                                ) : (
                                    <span className="font-semibold">Carregar mais fotos</span>
                                )}
                            </button>
                        </div>
                    </div>
                    <Modal
                        className="w-full max-w-xl"
                        style={{
                            overlay: {
                                backgroundColor: 'rgb(157 31 106 / 50%)',
                            },
                            content: {
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)'
                            }
                        }}
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Modal"
                    >
                        <Carousel
                            className="w-full h-full"
                            selectedItem={selectedImageIndex}
                            showArrows={true}
                            showStatus={false}
                            showThumbs={false}
                            infiniteLoop={true}
                            dynamicHeight={true}
                        >
                            {picList.map((pic, index) => (
                                <div key={index}>
                                    <Image
                                        src={`/galery/${pic}`}
                                        alt="Imagem da galeria"
                                        width={710}
                                        height={710}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </Modal>
                </section>
            </main>
        </>
    );
}
