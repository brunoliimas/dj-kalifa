'use client'
import React, { useState } from "react";
import Image from "next/image";
import Modal from 'react-modal';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import { IoMdArrowBack } from 'react-icons/io'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const picList = ["IMG_1", "IMG_2", "IMG_3", "IMG_4", "IMG_5", "IMG_6", "IMG_7", "IMG_8", "IMG_9", "IMG_10", "IMG_11", "IMG_12", "IMG_13", "IMG_14", "IMG_15", "IMG_16", "IMG_17", "IMG_18", "IMG_19", "IMG_20", "IMG_21", "IMG_22", "IMG_23", "IMG_24", "IMG_25", "IMG_26", "IMG_27", "IMG_28", "IMG_29", "IMG_30", "IMG_31", "IMG_32", "IMG_33", "IMG_34", "IMG_35", "IMG_36", "IMG_37", "IMG_38", "IMG_39", "IMG_40", "IMG_41", "IMG_42", "IMG_43", "IMG_44", "IMG_45", "IMG_46", "IMG_47", "IMG_48", "IMG_49", "IMG_50", "IMG_51", "IMG_52", "IMG_53", "IMG_54", "IMG_55", "IMG_56", "IMG_57", "IMG_58", "IMG_59", "IMG_60", "IMG_61", "IMG_62", "IMG_63", "IMG_64", "IMG_65", "IMG_66", "IMG_67", "IMG_68", "IMG_69", "IMG_70", "IMG_71", "IMG_72", "IMG_73", "IMG_74", "IMG_75", "IMG_76", "IMG_77", "IMG_78", "IMG_79", "IMG_80", "IMG_81", "IMG_82", "IMG_83", "IMG_84", "IMG_85", "IMG_86", "IMG_87", "IMG_88", "IMG_89", "IMG_90", "IMG_91", "IMG_92", "IMG_93", "IMG_94", "IMG_95", "IMG_96", "IMG_97", "IMG_98", "IMG_99", "IMG_100", "IMG_101", "IMG_102", "IMG_103", "IMG_104", "IMG_105", "IMG_106", "IMG_107", "IMG_108", "IMG_109", "IMG_110", "IMG_111", "IMG_112", "IMG_113", "IMG_114", "IMG_115", "IMG_116", "IMG_117", "IMG_118", "IMG_119", "IMG_120", "IMG_121", "IMG_122", "IMG_123",
];

export default function Pages() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [visibleImages, setVisibleImages] = useState(8);
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
            setVisibleImages(prevVisibleImages => prevVisibleImages + 8);
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
                            className="mt-8 md:mt-0 order-2 md:order-1"
                            src="/grafitti-kalifa.svg"
                            alt="Dj Kalifa"
                            width={270}
                            height={40}
                        />
                        <Link href="/" className="font-semibold flex items-center hover:text-pink-600 transition-all duration-500 order-1 md:order-2">
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
                                    src="/galery/capa-fotos.JPG"
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
                                        src={`/galery/${pic}.JPG`}
                                        alt={pic}
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
                            showIndicators={false}
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
                                        src={`/galery/${pic}.JPG`}
                                        alt={pic}
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
