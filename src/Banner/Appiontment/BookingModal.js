import format from 'date-fns/format';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    const { name,slots } = treatment
    const date = format(selectedDate, "PP")
    const handleBooking = event =>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const slot = form.slot.value
        const email = form.email.value;
        const phone = form.phone.value;

        const booking ={
            appiontmentDate:date,
            treatment: name,
            patient :name,
            slot,
            email,
            phone


        }
        console.log(booking);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered " />
                        <select name='slot' className="select select-ghost w-full ">
                            {
                              slots.map((slot,i)=> <option 
                              value={slot}
                              key={i}
                              >{slot}</option>)
                            }
                           
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input w-full input-bordered " />
                        <input name='email' type="email" placeholder="Email Adders" className="input w-full input-bordered " />
                        <input name='phone' type="text" placeholder="Phone" className="input w-full input-bordered " />
                        <input type='submit' value="Submit" className='w-full btn btn-accent input-bordered '></input>
                    </form>
                </div>
            </div>

        </>
    );
};

export default BookingModal;