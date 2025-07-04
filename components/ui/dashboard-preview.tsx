import React, { memo } from 'react';

import {
    BarChart3,
    Download,
    Eye,
    Filter,
    Home,
    MoreHorizontal,
    Package,
    Search,
    Settings,
    ShoppingCart,
    TrendingUp,
    Users
} from 'lucide-react';
import { Button } from './button';

// Define types for component props
interface MetricCardProps {
    title: string;
    icon: React.ReactNode;
    value: string;
    percentage: string;
    color: string;
    width: string;
}

interface OrderData {
    name: string;
    email: string;
    type: string;
    status: string;
    date: string;
    amount: string;
    statusColor: string;
}

interface OrderRowProps {
    order: OrderData;
}

interface OrderCardProps {
    order: OrderData;
}

// Extracted smaller components for better rendering performance
const MetricCard = memo(({ title, icon, value, percentage, color, width }: MetricCardProps) => (
    <div className='from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border group cursor-pointer rounded-2xl border bg-gradient-to-br p-4 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-xl lg:p-6'>
        <div className='mb-4 flex items-start justify-between'>
            <h3 className='text-canvas-text text-sm font-medium'>{title}</h3>
            <div className={`bg-${color}-solid/10 group-hover:bg-${color}-solid/20 flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-300`}>
                {icon}
            </div>
        </div>
        <div className={`text-canvas-text-contrast group-hover:text-${color}-solid mb-2 text-2xl font-bold transition-colors duration-300 lg:text-3xl`}>
            {value}
        </div>
        <div className={`text-${color}-solid mb-4 text-sm font-medium`}>{percentage}</div>
        <div className='bg-canvas-bg/50 relative h-2 overflow-hidden rounded-full'>
            <div className={`from-${color}-solid/20 to-${color}-solid/10 absolute inset-0 rounded-full bg-gradient-to-r`}></div>
            <div
                className={`from-${color}-solid to-${color}-solid-hover h-full rounded-full bg-gradient-to-r shadow-sm transition-all duration-1000 ease-out`}
                style={{ width }}></div>
        </div>
    </div>
));

const OrderRow = memo(({ order }: OrderRowProps) => (
    <div
        className='hover:bg-canvas-bg-hover/50 group grid cursor-pointer grid-cols-5 gap-4 p-4 text-sm transition-all duration-300 lg:p-6'>
        <div>
            <div className='text-canvas-text-contrast group-hover:text-primary-solid font-medium transition-colors duration-200'>
                {order.name}
            </div>
            <div className='text-canvas-text text-xs'>{order.email}</div>
        </div>
        <div className='text-canvas-text'>{order.type}</div>
        <div>
            <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 ${
                    order.statusColor === 'success'
                        ? 'bg-success-bg text-success-solid border-success-solid/20 border'
                        : 'bg-alert-bg text-alert-solid border-alert-solid/20 border'
                }`}>
                {order.status}
            </span>
        </div>
        <div className='text-canvas-text'>{order.date}</div>
        <div className='text-canvas-text-contrast font-semibold'>{order.amount}</div>
    </div>
));

const OrderCard = memo(({ order }: OrderCardProps) => (
    <div
        className='hover:bg-canvas-bg-hover/50 group cursor-pointer p-4 transition-all duration-300'>
        <div className='mb-2 flex items-start justify-between'>
            <div>
                <div className='text-canvas-text-contrast group-hover:text-primary-solid font-medium transition-colors duration-200'>
                    {order.name}
                </div>
                <div className='text-canvas-text text-xs'>{order.email}</div>
            </div>
            <div className='text-canvas-text-contrast font-semibold'>{order.amount}</div>
        </div>
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
                <span className='text-canvas-text text-sm'>{order.type}</span>
                <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-medium transition-all duration-200 ${
                        order.statusColor === 'success'
                            ? 'bg-success-bg text-success-solid border-success-solid/20 border'
                            : 'bg-alert-bg text-alert-solid border-alert-solid/20 border'
                    }`}>
                    {order.status}
                </span>
            </div>
            <div className='text-canvas-text text-sm'>{order.date}</div>
        </div>
    </div>
));

// Sample data - moved outside component to prevent recreation on each render
const ORDERS_DATA: OrderData[] = [
    {
        name: 'Emma Brown',
        email: 'emma@example.com',
        type: 'Sale',
        status: 'Fulfilled',
        date: '2023-06-26',
        amount: '$450.00',
        statusColor: 'success'
    },
    {
        name: 'Olivia Smith',
        email: 'olivia@example.com',
        type: 'Refund',
        status: 'Declined',
        date: '2023-06-24',
        amount: '$150.00',
        statusColor: 'alert'
    }
];

const MOBILE_ORDERS_DATA: OrderData[] = [
    {
        name: 'Olivia Smith',
        email: 'olivia@example.com',
        type: 'Refund',
        status: 'Declined',
        date: '2023-06-24',
        amount: '$150.00',
        statusColor: 'alert'
    },
    {
        name: 'Emma Brown',
        email: 'emma@example.com',
        type: 'Sale',
        status: 'Fulfilled',
        date: '2023-06-26',
        amount: '$450.00',
        statusColor: 'success'
    }
];

export const DashboardPreview = memo(() => {
    return (
        <div className='from-canvas-bg-subtle  to-canvas-bg-subtle relative min-h-screen overflow-hidden bg-gradient-to-br'>
            {/* Background decorative elements - removed animations */}
            <div className='pointer-events-none absolute inset-0 overflow-hidden'>
                <div className='bg-primary-solid/5 absolute -top-40 -right-40 h-80 w-80 rounded-full blur-3xl'></div>
                <div className='bg-success-solid/5 absolute -bottom-40 -left-40 h-80 w-80 rounded-full blur-3xl'></div>
            </div>

            {/* Main Content */}
            <div className='relative flex min-h-screen flex-col lg:flex-row'>
                {/* Dashboard Content - Mobile: Bottom, Desktop: Left */}
                <div className='max-h-screen flex-1 space-y-4 overflow-y-auto p-4 lg:order-1 lg:max-h-none lg:space-y-6 lg:p-6'>
                    <h1 className='text-canvas-text-contrast text-2xl font-bold'>Theme Preview</h1>
                    {/* Top Navigation Tabs */}
                    <div className='border-canvas-border mb-4 flex items-center space-x-8 border-b backdrop-blur-sm lg:mb-6'>
                        <Button
                            variant="ghost"
                            color="neutral"
                            className='text-canvas-text-contrast border-primary-solid group relative border-b-2 pb-3 text-sm font-medium transition-all duration-300 hover:cursor-pointer bg-transparent hover:bg-transparent rounded-none'>
                            Dashboard
                        </Button>
                    </div>

                    {/* Header with Breadcrumb */}
                    <div className='mb-4 flex flex-col items-start justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0 lg:mb-6'>
                        <div className='text-canvas-text flex items-center space-x-2 text-sm'>
                            <span className='hover:text-primary-solid cursor-pointer transition-colors duration-200'>
                                Dashboard
                            </span>
                            <span className='text-canvas-text/50'>›</span>
                            <span className='hover:text-primary-solid cursor-pointer transition-colors duration-200'>
                                Orders
                            </span>
                            <span className='text-canvas-text/50'>›</span>
                            <span className='text-canvas-text-contrast font-medium'>Recent Orders</span>
                        </div>
                        <div className='flex w-full items-center space-x-3 sm:w-auto'>
                            <div className='group relative flex-1 sm:flex-none'>
                                <Search className='text-canvas-text-contrast z-10 group-focus-within:text-primary-solid absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform transition-colors duration-200' />
                                <input
                                    type='text'
                                    placeholder='Search orders...'
                                    className='bg-canvas-bg/80 border-canvas-border focus:ring-primary-solid/50 focus:border-primary-solid hover:bg-canvas-bg-subtle/50 w-full rounded-xl border py-2.5 pr-4 pl-10 text-sm backdrop-blur-sm transition-all duration-300 focus:ring-2 focus:outline-none sm:w-64'
                                />
                            </div>
                        </div>
                    </div>

                    {/* Your Orders Section */}
                    <div className='from-canvas-bg-subtle/80 to-canvas-bg-subtle/60 border-canvas-border group mb-4 rounded-2xl border bg-gradient-to-r p-4 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-xl lg:mb-6 lg:p-6'>
                        <div className='flex flex-col items-start justify-between space-y-4 lg:flex-row lg:space-y-0'>
                            <div className='flex-1'>
                                <h2 className='text-canvas-text-contrast mb-2 text-xl font-semibold transition-colors duration-300'>
                                    Your Orders
                                </h2>
                                <p className='text-canvas-text mb-4 leading-relaxed'>
                                    Introducing Our Dynamic Orders Dashboard for Seamless Management and Insightful
                                    Analysis.
                                </p>
                                <Button
                                    color="primary"
                                    variant="solid"
                                    size="default"
                                    fullWidth={true}
                                    className='sm:w-auto'>
                                    Create New Order
                                </Button>
                            </div>
                            <div className='hidden opacity-20 transition-opacity duration-500 group-hover:opacity-40 lg:block'>
                                <TrendingUp className='text-primary-solid h-16 w-16' />
                            </div>
                        </div>
                    </div>

                    {/* Metrics Cards */}
                    <div className='mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mb-6 lg:gap-6'>
                        <MetricCard 
                            title="This Week"
                            icon={<TrendingUp className='text-success-solid h-4 w-4' />}
                            value="$1,329"
                            percentage="+25% from last week"
                            color="success"
                            width="65%"
                        />
                        <MetricCard 
                            title="This Month"
                            icon={<BarChart3 className='text-primary-solid h-4 w-4' />}
                            value="$5,329"
                            percentage="+10% from last month"
                            color="primary"
                            width="45%"
                        />
                    </div>

                    {/* Time Period Tabs */}
                    <div className='bg-canvas-bg-subtle/50 border-canvas-border mb-4 flex w-full space-x-1 overflow-x-auto rounded-xl border p-1 backdrop-blur-sm sm:w-fit lg:mb-6'>
                        <Button
                            color="primary"
                            variant="solid"
                            size="sm"
                            className='whitespace-nowrap'>
                            Week
                        </Button>
                        <Button
                            color="neutral"
                            variant="ghost"
                            size="sm"
                            className='text-canvas-text hover:text-canvas-text-contrast hover:bg-canvas-bg-subtle/50 whitespace-nowrap'>
                            Month
                        </Button>
                        <Button
                            color="neutral"
                            variant="ghost"
                            size="sm"
                            className='text-canvas-text hover:text-canvas-text-contrast hover:bg-canvas-bg-subtle/50 whitespace-nowrap'>
                            Year
                        </Button>
                    </div>

                    {/* Orders Table - Optimized to reduce re-rendering */}
                    <div className='from-canvas-bg-subtle/80 to-canvas-bg/60 border-canvas-border overflow-hidden rounded-2xl border bg-gradient-to-br shadow-lg backdrop-blur-sm'>
                        <div className='border-canvas-border from-canvas-bg-subtle/50 flex flex-col items-start justify-between space-y-4 border-b bg-gradient-to-r to-transparent p-4 sm:flex-row sm:items-center sm:space-y-0 lg:p-6'>
                            <div>
                                <h3 className='text-canvas-text-contrast text-lg font-semibold'>Orders</h3>
                                <p className='text-canvas-text text-sm'>Recent orders from your store.</p>
                            </div>
                            <div className='flex w-full items-center space-x-3 sm:w-auto'>
                                <Button
                                    color="neutral"
                                    variant="outline"
                                    size="sm"
                                    leadingIcon={<Filter className='h-4 w-4' />}
                                    fullWidth={true}
                                    className='sm:w-auto'>
                                    Filter
                                </Button>
                                <Button
                                    color="primary"
                                    variant="solid"
                                    size="sm"
                                    leadingIcon={<Download className='h-4 w-4' />}
                                    fullWidth={true}
                                    className='sm:w-auto'>
                                    Export
                                </Button>
                            </div>
                        </div>

                        {/* Table - Mobile: Card Layout, Desktop: Table Layout */}
                        <div className='hidden md:block'>
                            {/* Table Header */}
                            <div className='border-canvas-border text-canvas-text bg-canvas-bg-subtle/30 grid grid-cols-5 gap-4 border-b p-4 text-sm font-medium lg:p-6'>
                                <div>Customer</div>
                                <div>Type</div>
                                <div>Status</div>
                                <div>Date</div>
                                <div>Amount</div>
                            </div>

                            {/* Table Rows */}
                            <div className='divide-canvas-border/30 divide-y'>
                                {ORDERS_DATA.map((order, index) => (
                                    <OrderRow key={index} order={order} />
                                ))}
                            </div>
                        </div>

                        {/* Mobile Card Layout */}
                        <div className='divide-canvas-border/30 divide-y md:hidden'>
                            {MOBILE_ORDERS_DATA.map((order, index) => (
                                <OrderCard key={index} order={order} />
                            ))}
                        </div>
                    </div>
                </div>
                {/* Order Details Sidebar - Mobile: Top, Desktop: Right */}
                <div className='from-canvas-bg/95 rounded-lg to-canvas-bg-subtle/95 border-canvas-border max-h-screen w-full overflow-y-auto border-b bg-gradient-to-b p-4 shadow-xl backdrop-blur-sm lg:order-2 lg:max-h-none lg:w-80 lg:overflow-visible lg:border-b-0 lg:border-l lg:p-6'>
                    <div className='border-canvas-border mb-4 flex items-center justify-between border-b pb-4 lg:mb-6'>
                        <h3 className='text-canvas-text-contrast text-lg font-semibold'>Order Oe31b70H</h3>
                        <div className='flex items-center space-x-3'>
                            <Button
                                color="neutral"
                                variant="ghost"
                                iconOnly={true}
                                leadingIcon={<MoreHorizontal className='h-4 w-4' />}
                                size="sm"
                            />
                        </div>
                    </div>

                    <div className='space-y-4 lg:space-y-6'>
                        <div className='bg-canvas-bg-subtle/50 border-canvas-border rounded-xl border p-4'>
                            <p className='text-canvas-text mb-1 text-sm'>Date: November 23, 2023</p>
                        </div>

                        <div>
                            <h4 className='text-canvas-text-contrast mb-3 flex items-center space-x-2 text-sm font-medium'>
                                <span>Order Details</span>
                            </h4>
                            <div className='bg-canvas-bg-subtle/30 space-y-3 rounded-xl p-4'>
                                <div className='flex items-center justify-between'>
                                    <span className='text-canvas-text text-sm'>Glimmer Lamps x 2</span>
                                    <span className='text-canvas-text-contrast text-sm font-medium'>$250.00</span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span className='text-canvas-text text-sm'>Aqua Filters x 1</span>
                                    <span className='text-canvas-text-contrast text-sm font-medium'>$49.00</span>
                                </div>
                            </div>
                        </div>

                        <div className='border-canvas-border border-t pt-4'>
                            <div className='from-canvas-bg-subtle/30 to-canvas-bg-subtle/20 space-y-3 rounded-xl bg-gradient-to-r p-4'>
                                <div className='flex justify-between'>
                                    <span className='text-canvas-text text-sm'>Subtotal</span>
                                    <span className='text-canvas-text-contrast text-sm'>$299.00</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-canvas-text text-sm'>Shipping</span>
                                    <span className='text-canvas-text-contrast text-sm'>$5.00</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-canvas-text text-sm'>Tax</span>
                                    <span className='text-canvas-text-contrast text-sm'>$25.00</span>
                                </div>
                                <div className='border-canvas-border mt-2 border-t pt-2'>
                                    <div className='flex justify-between font-semibold'>
                                        <span className='text-canvas-text-contrast text-sm'>Total</span>
                                        <span className='text-primary-solid text-lg'>$329.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='bg-canvas-bg-subtle/30 rounded-xl p-4'>
                            <h4 className='text-canvas-text-contrast mb-3 text-sm font-medium'>Shipping Information</h4>
                            <div className='text-canvas-text space-y-1 text-sm'>
                                <p className='text-canvas-text-contrast font-medium'>Liam Johnson</p>
                                <p>1234 Main St.</p>
                                <p>Anytown, CA 12345</p>
                            </div>
                        </div>

                        <div className='bg-canvas-bg-subtle/30 rounded-xl p-4'>
                            <h4 className='text-canvas-text-contrast mb-3 text-sm font-medium'>Customer Information</h4>
                            <div className='text-canvas-text space-y-2 text-sm'>
                                <div className='flex justify-between'>
                                    <span>Customer</span>
                                    <span className='text-canvas-text-contrast font-medium'>Liam Johnson</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span>Email</span>
                                    <span className='text-canvas-text-contrast'>liam@acme.com</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span>Phone</span>
                                    <span className='text-canvas-text-contrast'>+1 234 567 890</span>
                                </div>
                            </div>
                        </div>

                        <div className='from-primary-solid/5 to-primary-solid/10 border-primary-solid/20 rounded-xl border bg-gradient-to-r p-4'>
                            <h4 className='text-canvas-text-contrast mb-3 text-sm font-medium'>Payment Information</h4>
                            <div className='mb-2 flex items-center space-x-3'>
                                <div className='flex h-5 w-8 items-center justify-center rounded-md bg-gradient-to-r from-gray-700 to-gray-900'>
                                    <div className='h-2 w-4 rounded-sm bg-white opacity-80'></div>
                                </div>
                                <span className='text-canvas-text font-mono text-sm'>•••• •••• •••• 4532</span>
                            </div>
                            <p className='text-canvas-text text-xs'>Updated November 23, 2023</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
});
