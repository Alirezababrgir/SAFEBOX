
/*modal*/

/*

import { Divider, Modal } from "@mui/material";
import Box from '@mui/material/Box';
import bitkeep from "../../assets/banners/bitkip.png"
import trust from "../../assets/banners/trust.png"
import meta from "../../assets/banners/meta.png"
import { IoMdCloseCircle } from "react-icons/io";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "70%",
    bgcolor: 'background.paper',
    borderRadius: "1rem",
    boxShadow: 24,
    p: 4,
};
const ModalComponent = ({ open, handleClose }) => {


    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Divider className="mb-4"><h3>Select Wallet</h3></Divider>
                <div className="containe">
                    <div className="row justify-content-center text-center py-4">
                        <div className="col-12 col-sm-4 mt-2">
                            <img onClick={connectWallet} className="wallets" src={meta} alt="trust" />
                        </div>
                        <div className="col-12 col-sm-4 my-4">
                            <img className="wallets" src={trust} alt="trust" />
                        </div>
                        <div className="col-12 col-sm-4 mt-2 mb-4">
                            <img className="wallets" src={bitkeep} alt="trust" />
                        </div>
                        <div className="col-12 mt-4">
                            <Divider><IoMdCloseCircle onClick={handleClose} style={{ fontSize: "3.5rem" }} className="text-danger" /></Divider>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}
export default ModalComponent;
*/