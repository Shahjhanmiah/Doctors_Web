import format from 'date-fns/format';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    const { name } = treatment
    const data = format(selectedDate, "PP")
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={data} className="input w-full input-bordered " />
                        <select className="select select-ghost w-full ">
                            <option disabled selected>Pick the best JS framework</option>
                            <option>Svelte</option>
                            <option>Vue</option>
                            <option>React</option>
                        </select>
                        <input type="text" placeholder="Type here" className="input w-full input-bordered " />
                        <input type="text" placeholder="Type here" className="input w-full input-bordered " />
                        <input type="text" placeholder="Type here" className="input w-full input-bordered " />
                        <input type='submit' value="Submit" className='w-full btn btn-accent input-bordered '></input>
                    </form>
                </div>
            </div>

        </>
    );
};

export default BookingModal;