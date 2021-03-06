import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'

function card() {
    return (

        <div className="px-8 mt-8">
            <div className="mx-auto lg:w-3/5 lg:flex lg:flex-row lg:h-auto">
                <img className="rounded-tr-md rounded-tl-md h-48 w-full lg:h-auto lg:w-2/5 lg:rounded-bl-md lg:rounded-tr-none" src="/images/im.png" alt="image" />

                <div className="bg-white p-8 rounded-tl-md rounded-br-md lg:rounded-tl-none lg:rounded-bl-none lg:rounded-tr-md">
                    <h2 className="text-gray-800 font-semibold">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </h2>
                    <p className="text-sm text-gray-600 mt-5">
                        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>

                    <div className="flex items-center mt-8">

                        <div className="flex items-center">
                            <img className="h-10 w-10 rounded-full" src="images/avatar.png" alt="avatar" />
                            <div className="ml-5">
                                <p className="text-gray-500 text-sm font-semibold">Avatar name</p>
                                <p className="text-gray-300 text-sm">29-10-1990</p>
                            </div>
                        </div>
                        <div className="bg-gray-200 rounded-full ml-auto w-10 h-10">
                            <img className="px-2 py-2" src="/images/share.png" alt="shareIcon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default card;
