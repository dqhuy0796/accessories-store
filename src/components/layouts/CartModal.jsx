import { Drawer, IconButton, Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";


function CartModal({open, onClose}) {

 

    return (
        <Drawer placement="right" open={open} onClose={onClose} className="p-4 w-[500px]">
            <div className="mb-6 flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                    Giỏ hàng
                </Typography>
                <IconButton variant="text" color="blue-gray" onClick={onClose}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </IconButton>
            </div>
            <div>
                <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-1">
                        <img
                            className="h-36 w-full rounded-lg object-cover object-center"
                            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                            alt="nature image"
                        />
                    </div>
                    <div className="col-span-1">
                        <p>name</p>
                        <p>mau sac</p>
                        <div>
                            <div>
                                <span>-</span>
                                <span>9</span>
                                <span>+</span>
                            </div>
                            <p>Xóa</p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <p>120000d</p>
                    </div>
                </div>
            </div>
        </Drawer>
    );
}

CartModal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
   
};

export default CartModal;
