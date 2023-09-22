import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import React from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

function About() {
    const [open, setOpen] = React.useState(0);
    const [activeTab, setActiveTab] = React.useState("Về Đặt Hàng");

    const data = [
        {
            label: "Về Đặt Hàng",
            value: "Về Đặt Hàng",
            more: [
                {
                    title: "Thời gian đặt hàng trước tối thiểu là bao lâu?",
                    desc: "Bạn nên đặt trước 1 ngày để có thể lựa chọn tất cả các mẫu hàng. Nếu bạn cần đặt gấp trong ngày, vui lòng liên hệ hotline 090 786 0330 để được phục vụ ngay, tuy nhiên mẫu hàng có thể hạn chế và không đủ toàn bộ mẫu.",
                },
                {
                    title: "Tôi có thể đến mua hàng trực tiếp tại xưởng của shop không?",
                    desc: "Chúng tôi không bán sản phẩm có sẵn và không bán trực tiếp tại xưởng. Do đặc thù sản phẩm hàng lạnh cao cấp rất khó bảo quản trong quá trình giao hàng nên hãy để các shipper chuyên nghiệp của chúng tôi giao hàng đến tận tay bạn để đảm bảo hàng luôn có được chất lượng tốt nhất.",
                },
                {
                    title: "shop có các hình thức thanh toán nào?",
                    desc: "Hiện tại đối với cách đặt hàng qua website, shop chỉ có hình thức thanh toán duy nhất là chuyển khoản 100% giá trị đơn hàng ngay khi đặt hàng. Nếu bạn chỉ muốn đặt cọc 50% và thanh toán nốt 50% còn lại khi nhận hàng, vui lòng liên hệ hotline 090 786 0330 để đặt hàng.",
                },
                {
                    title: "Tôi có thể thay đổi loại hàng sau khi đã hoàn tất đặt hàng không?",
                    desc: "Để thay đổi loại hàng, bạn vui lòng liên hệ với chúng tôi trước ít nhất 24h để chúng tôi kiểm tra liệu nguyên liệu có sẵn để đáp ứng không. Nếu nguyên liệu còn đủ chúng tôi sẽ đổi loại hàng theo yêu cầu của bạn, tuy nhiên chúng tôi không đảm bảo chắc chắn về điều này, rất mong bạn thông cảm.",
                },
                {
                    title: "Tôi có thể huỷ đơn hàng sau khi đã thanh toán tiền hàng không?",
                    desc: "Nếu bạn muốn huỷ đơn hàng, vui lòng liên hệ trước với chúng tôi ít nhất 24h. Tiền hàng sẽ được chúng tôi bảo lưu lại và trừ vào lần đặt hàng tiếp theo của bạn. Nếu bạn liên hệ với chúng tôi muộn hơn 24h, lúc này đơn hàng của bạn đã được sản xuất vì vậy rất tiếc chúng tôi sẽ không thể hỗ trợ bạn huỷ đơn hàng.",
                },
            ],
        },
        {
            label: "Về Giao Hàng",
            value: "Về Giao Hàng",
            more: [
                {
                    title: "Tôi có thể giao hàng không?",
                    desc: "Bạn có thể chọn một trong các khung giờ sau: từ 11h15-13h, 13h-15h, 15h-17h hoặc 18h-20h.",
                },
                {
                    title: "Tôi có thể chọn giờ giao hàng chính xác tuyệt đối (ví dụ 12h15) thay vì chọn khung giờ như trên không?",
                    desc: "Xin lỗi, hiện tại chúng tôi chỉ có thể giao theo khung giờ mà không thể hẹn bạn chính xác đến từng phút, bởi shipper có thể cần thời gian sắp xếp tuyến đường hợp lý để đảm bảo chất lượng hàng tốt nhất khi đến tay khách hàng.",
                },
                {
                    title: "Tôi sẽ nhận được hàng đúng trong khung giờ tôi chọn chứ?",
                    desc: "Chúng tôi luôn cố gắng hết sức để đảm bảo hàng được giao tới tay bạn trong khung giờ bạn chọn. Tuy nhiên sẽ có thể xảy ra những sự cố ngoài ý muốn do giao thông, thời tiết… dẫn đến việc giao hàng bị chậm trễ một chút. Nếu shipper không tới đúng hẹn, vui lòng liên hệ hotline để chúng tôi hỗ trợ bạn ngay lập tức",
                },
                {
                    title: "Nếu shipper giao hàng đến mà tôi không nghe điện thoại/ tôi có việc bận quên mất phải nhận hàng thì sao?",
                    desc: "Shipper của chúng tôi sẽ mang hàng quay trở lại xưởng của shop. Bạn sẽ cần liên hệ với chúng tôi để giao hàng lại và thanh toán phí giao hàng cho cả 2 lần. Nếu trong cùng ngày bạn không liên hệ lại để nhận, hàng sẽ bị huỷ và rất mong bạn hiểu là chúng tôi không thể hoàn trả lại tiền hàng cho bạn trong trường hợp này.",
                },
                {
                    title: "Tôi có thể thay đổi khung thời gian/ địa chỉ giao hàng sau khi đã đặt không?",
                    desc: "Để thay đổi thông tin giao hàng, vui lòng liên hệ với chúng tôi trước ít nhất 24h để chúng tôi có thể sắp xếp lại tuyến đường giao hàng cho bạn. Nếu bạn liên hệ quá gấp, chúng tôi sẽ không thể thay đổi điều này. ",
                },
                {
                    title: "Tôi muốn shipper giao hàng đến tận cửa phòng của chung cư/ giao đến tận tầng của toà nhà có được không?",
                    desc: " Mong bạn thông cảm, shipper của chúng tôi sẽ chỉ giao được đến sảnh của chung cư/ toà nhà chứ không thể mang lên tầng/phòng.",
                },
                {
                    title: "Sau khi tôi nhận hàng & shipper đã ra về thì mới phát hiện hàng bị xô lệch/ hình thức không nguyên vẹn thì tôi phải làm thế nào?",
                    desc: "Trong trường hợp này, mong bạn thông cảm chúng tôi sẽ không thể hỗ trợ được thêm do không xác định được sự cố xảy ra do lỗi của shipper hay xảy ra sau khi đơn hàng đã được giao đến tay khách. Vì vậy chúng tôi luôn khuyến khích bạn kiểm tra hàng ngay khi nhận hàng.",
                },
            ],
        },
        {
            label: "Về Sản Phẩm",
            value: "Về Sản Phẩm",
            more: [
                {
                    title: "Cách bảo quản các loại hàng thế nào? Thời hạn sử dụng là bao lâu?",
                    desc: "Tất cả các loại hàng của chúng tôi hoàn toàn sử dụng nguyên liệu tươi và không sử dụng chất bảo quản, vì vậy vui lòng giữ hàng trong hộp kín & bảo quản ngăn mát tủ lạnh ngay khi bạn nhận hàng (không để hàng vào ngăn đông). Bạn không nên để hàng ở nhiệt độ phòng quá 30 phút (hàng sẽ bị chảy), chỉ lấy hàng ra khỏi ngăn mát tủ lạnh ngay trước khi ăn. hàng được bảo quản đúng cách có thể sử dụng trong vòng 3 ngày.",
                },
                {
                    title: "Tôi có thể đặt hàng theo mẫu riêng mà tôi muốn được không?",
                    desc: "Rất tiếc, chúng tôi chỉ sản xuất các mẫu có sẵn và không nhận đặt theo mẫu riêng.",
                },
                {
                    title: "TTôi muốn di chuyển hàng từ nơi này đến nơi khác bằng xe máy/ ô tô thì có sợ hàng bị chảy không?",
                    desc: "Bạn có thể di chuyển hàng bằng ô tô trong thời gian dưới 45 phút (với điều kiện máy lạnh trên xe mở ở mức lạnh sâu). Nếu bạn di chuyển bằng xe máy thì quãng đường không nên dài quá 30 phút và thời tiết ngoài trời không vượt mức 30 độ C (quá nóng hàng sẽ bị chảy), tốt nhất nên di chuyển kèm đá lạnh/ đá khô. Vì vậy chúng tôi khuyến khích bạn đặt giao hàng đến trực tiếp địa chỉ bạn sẽ ăn hàng để không phải tự di chuyển hàng nhiều lần.",
                },
            ],
        },
        {
            label: "Về Bảo Hành",
            value: "Về Bảo Hành",
            more: [
                {
                    title: "Những sản phẩm đủ điều kiện bảo hành",
                    desc: "Sản phẩm nếu có tem niêm phong (seal) trên sản phẩm thì tem niêm phong phải còn nguyên vẹn. Đối với sản phẩm bảo hành trên hộp: sản phẩm còn đầy đủ hộp. Sản phẩm không trầy xước, cấn móp, bể, vỡ, biến dạng so với ban đầu.",
                },
                {
                    title: "Những sản phẩm không đủ điều kiện bảo hành",
                    desc: "Hết thời hạn bảo hành. Không có tem niêm phong, hoặc bị tẩy xóa, không còn nguyên dạng ban đầu. Bị tác động vật lý làm trầy xước, cong vênh, rạn nứt, bể vỡ trong quá trình quá trình sử dụng. Bị hư hỏng do thiên tai, hỏa hoạn, lụt lội, sét đánh, rỉsét, hao mòn do môi trường gây ra.",
                },
            ],
        },
    ];

    return (
        <div className="px-6">
            <div className="mt-6">
                <Tabs value={activeTab}>
                    <TabsHeader
                        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                        indicatorProps={{
                            className: "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                        }}
                    >
                        {data.map(({ label, value }) => (
                            <Tab
                                className={activeTab === value ? "text-gray-900" : ""}
                                key={value}
                                value={value}
                                onClick={() => setActiveTab(value)}
                            >
                                <div className="flex items-center gap-2 text-xs md:text-base uppercase font-bold">
                                    {label}
                                </div>
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody>
                        {data.map(({ value, more }) => (
                            <TabPanel key={value} value={value}>
                                {more.map((item, index) => (
                                    <Accordion key={index} open={open === index} onClick={() => setOpen(index)}>
                                        <AccordionHeader className="text-sm md:text-sm ">
                                            {item.title}
                                        </AccordionHeader>
                                        <AccordionBody className="text-xs">
                                            {item.desc}
                                        </AccordionBody>
                                    </Accordion>
                                ))}
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
                ;
            </div>
        </div>
    );
}

export default About;
