import { useEffect, useState } from "react";


const Problem2 = () => {
    const [problem2Data, setProblem2Data] = useState([])
    useEffect(() => {
        fetch('https://contact.mediusware.com/api-doc/?format=openapi')
            .then(res => res.json())
            .then(data => setProblem2Data(data))
    }, [])
    console.log(problem2Data);
    return (

        <div className="container">
            <div className="mt-5 row justify-content-center">
                <h4 className='mb-5 text-center text-uppercase'>Problem-2</h4>

                <div className="flex items-center justify-center gap-6 mt-6">
                    <button className="btn btn-lg btn-outline-primary" type="button" onClick={() => document.getElementById('my_modal_1').showModal()} >All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button" onClick={() => document.getElementById('my_modal_2').showModal()}>US Contacts</button>
                </div>
            </div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">Hello!</h3>
                    <p className="py-4">Modal One</p>
                    <div className="flex justify-center gap-6 ">
                        <button className="btn bg-[#46139f] text-white hover:text-black">All Contracts</button>
                        <button className="btn bg-[#ff7f50] text-white hover:text-black">US Contracts</button>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="bg-transparent border-[#46139f] border-2 btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">Hello!</h3>
                    <p className="py-4">Modal Two</p>
                    <div className="flex justify-center gap-6 ">
                        <button className="btn bg-[#46139f] text-white hover:text-black">All Contracts</button>
                        <button className="btn bg-[#ff7f50] text-white hover:text-black">US Contracts</button>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="bg-transparent border-[#46139f] border-2 btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Problem2;