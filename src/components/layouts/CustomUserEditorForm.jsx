import { Button, Input } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import CustomAddressSelection from '../partials/CustomAddressSelection';
import CustomAvatarUpload from '../partials/CustomAvatarUpload';
import CustomEditor from '../partials/CustomEditor';
import CustomUserDetailsItem from '../partials/CustomUserDetailsItem';

export function CustomUserEditorForm({ data, isCreate, onChange }) {
    const handleOnChangeAddress = (key, value) => {
        switch (key) {
            case 'province':
                onChange('address', {
                    ...data.address,
                    province: value,
                    district: '',
                    ward: '',
                });
                break;
            case 'district':
                onChange('address', {
                    ...data.address,
                    district: value,
                    ward: '',
                });
                break;
            case 'ward':
                onChange('address', {
                    ...data.address,
                    ward: value,
                });
                break;
            default:
                onChange('address', {
                    ...data.address,
                    location: value,
                });
                break;
        }
    };
    const contents = [
        {
            layout: 'header',
            items: [
                {
                    key: 'name',
                    type: 'text',
                    label: 'Họ tên',
                },
                {
                    key: 'birth',
                    type: 'date',
                    label: 'Ngày sinh',
                },
            ],
        },
        {
            layout: 'body',
            items: [
                {
                    key: 'phone_number',
                    type: 'tel',
                    label: 'Số điện thoại',
                    readOnly: true,
                },
                {
                    key: 'email',
                    type: 'email',
                    label: 'Email',
                    readOnly: true,
                },
                {
                    key: 'password',
                    type: 'password',
                    label: 'Mật khẩu',
                    readOnly: true,
                },
            ],
        },
    ];

    return (
        <div className="grid w-full gap-6 lg:grid-cols-3">
            <div className="row-span-2 grid place-items-center">
                <CustomAvatarUpload
                    avatar={data?.avatar}
                    readOnly={false}
                    onChangeAvatar={(value) => onChange('avatar', value)}
                />
            </div>
            {contents.map(({ layout, items }, index) =>
                layout === 'header' ? (
                    <div key={index} className="grid gap-6 lg:col-span-2">
                        {items.map((item) => (
                            <Input
                                key={item.key}
                                size="lg"
                                color="blue"
                                type={item.type}
                                label={item.label}
                                value={data[item.key] ?? ''}
                                onChange={(e) => onChange(item.key, e.target.value)}
                                readOnly={item.readOnly && !isCreate ? true : false}
                            />
                        ))}
                    </div>
                ) : (
                    <div key={index} className="grid gap-6 lg:col-span-2">
                        {items.map((item) => (
                            <div key={item.key} className="flex items-end justify-between gap-2">
                                {item.readOnly && !isCreate ? (
                                    <>
                                        <CustomUserDetailsItem
                                            label={item.label}
                                            text={data[item.key] ? data[item.key] : 'unknown'}
                                            encrypt={item.key}
                                        />
                                        <Button
                                            size="sm"
                                            color="blue"
                                            variant="text"
                                            className="whitespace-nowrap px-2"
                                        >
                                            Chỉnh sửa
                                        </Button>
                                    </>
                                ) : (
                                    <Input
                                        key={item.key}
                                        size="lg"
                                        color="blue"
                                        type={item.type}
                                        label={item.label}
                                        value={data[item.key] ?? ''}
                                        onChange={(e) => onChange(item.key, e.target.value)}
                                        readOnly={item.readOnly && !isCreate ? true : false}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                ),
            )}
            <div className="grid gap-6 lg:col-span-3">
                <CustomAddressSelection address={data?.address} onChange={handleOnChangeAddress} />

                <CustomEditor value={data?.bio} onChange={(value) => onChange('bio', value)} />
            </div>
        </div>
    );
}

CustomUserEditorForm.defaultProps = {};

CustomUserEditorForm.propTypes = {
    data: PropTypes.object,
    isCreate: PropTypes.bool,
    onChange: PropTypes.func,
};

export default CustomUserEditorForm;
