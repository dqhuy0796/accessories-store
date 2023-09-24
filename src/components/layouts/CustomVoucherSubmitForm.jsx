import { Button, Input } from '@material-tailwind/react';
import { useState } from 'react';

function CustomVoucherSubmitForm() {
    const [disabled, setDisabled] = useState(true);
    const [voucher, setVoucher] = useState('');
    const onChange = ({ target }) => setVoucher(target.value);

    return (
        <div className={disabled ? 'overflow-hidden rounded-md border border-blue-gray-200' : null}>
            <div className="relative flex w-full bg-white">
                <Input
                    type="text"
                    label="Mã giảm giá hiện không khả dụng"
                    color="blue"
                    value={voucher}
                    onChange={onChange}
                    disabled={disabled}
                    className="pr-20"
                    containerProps={{
                        className: 'min-w-0',
                    }}
                />
                <Button
                    size="sm"
                    color={voucher ? 'blue' : 'blue-gray'}
                    disabled={!voucher}
                    className="!absolute right-1 top-1 rounded"
                >
                    Áp dụng
                </Button>
            </div>
        </div>
    );
}

export default CustomVoucherSubmitForm;
