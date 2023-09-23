import CustomOrderEditorForm from '@/components/layouts/CustomOrderEditorForm';
import { useState } from 'react';

function Checkout() {
    const [data, setData] = useState({address: {}});
    return (
        <div>
            <CustomOrderEditorForm isCreate data={data} />
        </div>
    );
}

export default Checkout;
