
const DashboardLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className=" p-10 container mx-auto">
            <main>{children}</main>
        </div>
    );
};

export default DashboardLayout;