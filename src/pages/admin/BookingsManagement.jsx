import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Chip,
  Avatar,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import {
  CalendarDaysIcon,
  ClockIcon,
  UserIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  XCircleIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
} from "@heroicons/react/24/solid";

const BookingsManagement = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [statusDialogOpen, setStatusDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Helper function to format dates without date-fns
  const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString('en-US', options);
  };

  const formatSimpleDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  };

  // Mock data for bookings
  const mockBookings = [
    {
      id: 1,
      user: {
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      stadium: {
        name: "Green Turf Stadium",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/e8b88258143373.59f0e4958094d.jpg",
        location: "Cairo",
      },
      date: new Date(2024, 2, 15),
      timeSlot: "14:00 - 16:00",
      hours: 2,
      totalAmount: 112,
      status: "confirmed",
      paymentMethod: "Credit Card",
      bookingDate: new Date(2024, 2, 10),
    },
    {
      id: 2,
      user: {
        name: "Jane Smith",
        email: "jane@example.com",
        avatar: "https://i.pravatar.cc/150?img=2",
      },
      stadium: {
        name: "Sunny Field",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/d8f9d7125017935.6110d0d3b3313.jpg",
        location: "Giza",
      },
      date: new Date(2024, 2, 16),
      timeSlot: "18:00 - 20:00",
      hours: 2,
      totalAmount: 90,
      status: "pending",
      paymentMethod: "PayPal",
      bookingDate: new Date(2024, 2, 11),
    },
    {
      id: 3,
      user: {
        name: "Alex Johnson",
        email: "alex@example.com",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
      stadium: {
        name: "Victory Field",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/de3d39125017935.6110d0d3b488c.jpg",
        location: "Alexandria",
      },
      date: new Date(2024, 2, 17),
      timeSlot: "10:00 - 12:00",
      hours: 2,
      totalAmount: 60,
      status: "cancelled",
      paymentMethod: "Cash",
      bookingDate: new Date(2024, 2, 12),
    },
    {
      id: 4,
      user: {
        name: "Sarah Wilson",
        email: "sarah@example.com",
        avatar: "https://i.pravatar.cc/150?img=4",
      },
      stadium: {
        name: "Elite Stadium",
        image: "/homeImages/home.png",
        location: "Nasr City",
      },
      date: new Date(2024, 2, 18),
      timeSlot: "16:00 - 18:00",
      hours: 2,
      totalAmount: 120,
      status: "confirmed",
      paymentMethod: "Credit Card",
      bookingDate: new Date(2024, 2, 13),
    },
    {
      id: 5,
      user: {
        name: "Michael Brown",
        email: "michael@example.com",
        avatar: "https://i.pravatar.cc/150?img=5",
      },
      stadium: {
        name: "Street Legends Arena",
        image: "/homeImages/home.png",
        location: "Heliopolis",
      },
      date: new Date(2024, 2, 19),
      timeSlot: "20:00 - 22:00",
      hours: 2,
      totalAmount: 50,
      status: "pending",
      paymentMethod: "Credit Card",
      bookingDate: new Date(2024, 2, 14),
    },
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setBookings(mockBookings);
      setLoading(false);
    }, 1000);
  }, []);

  const handleViewBooking = (booking) => {
    setSelectedBooking(booking);
    setViewDialogOpen(true);
  };

  const handleStatusChange = (booking) => {
    setSelectedBooking(booking);
    setStatusDialogOpen(true);
  };

  const updateBookingStatus = (newStatus) => {
    if (!selectedBooking) return;

    setBookings(bookings.map(booking =>
      booking.id === selectedBooking.id
        ? { ...booking, status: newStatus }
        : booking
    ));

    setStatusDialogOpen(false);
    setSelectedBooking(null);
    alert(`Booking status updated to ${newStatus}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "green";
      case "pending":
        return "yellow";
      case "cancelled":
        return "red";
      default:
        return "gray";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "confirmed":
        return <CheckCircleIcon className="h-4 w-4" />;
      case "pending":
        return <ClockIcon className="h-4 w-4" />;
      case "cancelled":
        return <XCircleIcon className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = 
      booking.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.stadium.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.user.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = 
      statusFilter === "all" || booking.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: bookings.length,
    confirmed: bookings.filter(b => b.status === "confirmed").length,
    pending: bookings.filter(b => b.status === "pending").length,
    cancelled: bookings.filter(b => b.status === "cancelled").length,
    revenue: bookings.filter(b => b.status === "confirmed").reduce((sum, b) => sum + b.totalAmount, 0),
  };

  if (loading) {
    return (
      <div className="p-8 bg-light-bg dark:bg-dark-bg min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-green dark:border-dark-accent mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-dark-text">Loading bookings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-light-bg dark:bg-dark-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Typography variant="h3" className="font-bold text-gray-800 dark:text-dark-text mb-2">
            Bookings Management
          </Typography>
          <Typography className="text-gray-600 dark:text-dark-text/70">
            Manage all stadium bookings and reservations
          </Typography>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-lg">
            <CardBody className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <Typography color="blue-gray" className="text-sm font-medium dark:text-dark-text">
                    Total Bookings
                  </Typography>
                  <Typography variant="h4" className="mt-2 font-bold dark:text-dark-text">
                    {stats.total}
                  </Typography>
                </div>
                <div className="p-3 bg-blue-500 rounded-full">
                  <CalendarDaysIcon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="shadow-lg">
            <CardBody className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <Typography color="blue-gray" className="text-sm font-medium dark:text-dark-text">
                    Confirmed
                  </Typography>
                  <Typography variant="h4" className="mt-2 font-bold text-green-600 dark:text-green-400">
                    {stats.confirmed}
                  </Typography>
                </div>
                <div className="p-3 bg-green-500 rounded-full">
                  <CheckCircleIcon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="shadow-lg">
            <CardBody className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <Typography color="blue-gray" className="text-sm font-medium dark:text-dark-text">
                    Total Revenue
                  </Typography>
                  <Typography variant="h4" className="mt-2 font-bold text-emerald-600 dark:text-emerald-400">
                    ${stats.revenue}
                  </Typography>
                </div>
                <div className="p-3 bg-emerald-500 rounded-full">
                  <CurrencyDollarIcon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="shadow-lg">
            <CardBody className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <Typography color="blue-gray" className="text-sm font-medium dark:text-dark-text">
                    Pending
                  </Typography>
                  <Typography variant="h4" className="mt-2 font-bold text-yellow-600 dark:text-yellow-400">
                    {stats.pending}
                  </Typography>
                </div>
                <div className="p-3 bg-yellow-500 rounded-full">
                  <ClockIcon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Filters */}
        <Card className="shadow-lg mb-8">
          <CardBody className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    label="Search bookings..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                    color="blue"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-64">
                <div className="flex items-center gap-2">
                  <FunnelIcon className="h-5 w-5 text-gray-400" />
                  <Select
                    label="Filter by Status"
                    value={statusFilter}
                    onChange={(value) => setStatusFilter(value)}
                    color="blue"
                  >
                    <Option value="all">All Statuses</Option>
                    <Option value="confirmed">Confirmed</Option>
                    <Option value="pending">Pending</Option>
                    <Option value="cancelled">Cancelled</Option>
                  </Select>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Bookings Table */}
        <Card className="shadow-lg">
          <CardBody className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full min-w-max table-auto">
                <thead>
                  <tr className="bg-gray-50 dark:bg-dark-surface">
                    <th className="p-4 text-left">
                      <Typography variant="small" color="blue-gray" className="font-bold dark:text-dark-text">
                        Booking
                      </Typography>
                    </th>
                    <th className="p-4 text-left">
                      <Typography variant="small" color="blue-gray" className="font-bold dark:text-dark-text">
                        Stadium
                      </Typography>
                    </th>
                    <th className="p-4 text-left">
                      <Typography variant="small" color="blue-gray" className="font-bold dark:text-dark-text">
                        Date & Time
                      </Typography>
                    </th>
                    <th className="p-4 text-left">
                      <Typography variant="small" color="blue-gray" className="font-bold dark:text-dark-text">
                        Amount
                      </Typography>
                    </th>
                    <th className="p-4 text-left">
                      <Typography variant="small" color="blue-gray" className="font-bold dark:text-dark-text">
                        Status
                      </Typography>
                    </th>
                    <th className="p-4 text-left">
                      <Typography variant="small" color="blue-gray" className="font-bold dark:text-dark-text">
                        Actions
                      </Typography>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-gray-100 dark:border-dark-text/10 hover:bg-gray-50 dark:hover:bg-dark-surface/50">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <Avatar src={booking.user.avatar} alt={booking.user.name} size="sm" />
                          <div>
                            <Typography variant="small" color="blue-gray" className="font-semibold dark:text-dark-text">
                              {booking.user.name}
                            </Typography>
                            <Typography variant="small" color="gray" className="text-xs dark:text-dark-text/70">
                              {booking.user.email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded overflow-hidden">
                            <img
                              src={booking.stadium.image}
                              alt={booking.stadium.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <Typography variant="small" className="font-medium dark:text-dark-text">
                              {booking.stadium.name}
                            </Typography>
                            <Typography variant="small" color="gray" className="text-xs dark:text-dark-text/70">
                              {booking.stadium.location}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <Typography variant="small" className="font-medium dark:text-dark-text">
                          {formatSimpleDate(booking.date)}
                        </Typography>
                        <Typography variant="small" color="gray" className="text-xs dark:text-dark-text/70">
                          {booking.timeSlot} ({booking.hours}h)
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography variant="small" className="font-bold text-emerald-600 dark:text-emerald-400">
                          ${booking.totalAmount}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Chip
                          value={booking.status}
                          color={getStatusColor(booking.status)}
                          icon={getStatusIcon(booking.status)}
                          className="capitalize"
                          size="sm"
                        />
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            color="blue"
                            variant="outlined"
                            onClick={() => handleViewBooking(booking)}
                          >
                            View
                          </Button>
                          <Button
                            size="sm"
                            color="green"
                            variant="gradient"
                            onClick={() => handleStatusChange(booking)}
                          >
                            Update
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>

        {/* View Booking Dialog */}
        <Dialog
          open={viewDialogOpen}
          handler={() => setViewDialogOpen(false)}
          className="dark:bg-dark-surface"
        >
          <DialogHeader className="dark:text-dark-text">
            Booking Details
          </DialogHeader>
          <DialogBody className="dark:text-dark-text">
            {selectedBooking && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Typography variant="small" color="blue-gray" className="font-semibold mb-2">
                      Customer Information
                    </Typography>
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar src={selectedBooking.user.avatar} alt={selectedBooking.user.name} size="lg" />
                      <div>
                        <Typography className="font-semibold">{selectedBooking.user.name}</Typography>
                        <Typography variant="small" color="gray" className="dark:text-dark-text/70">
                          {selectedBooking.user.email}
                        </Typography>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Typography variant="small" color="blue-gray" className="font-semibold mb-2">
                      Booking Status
                    </Typography>
                    <Chip
                      value={selectedBooking.status}
                      color={getStatusColor(selectedBooking.status)}
                      icon={getStatusIcon(selectedBooking.status)}
                      className="capitalize text-lg py-2"
                    />
                  </div>
                </div>

                <div>
                  <Typography variant="small" color="blue-gray" className="font-semibold mb-2">
                    Stadium Details
                  </Typography>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-dark-bg rounded-lg">
                    <div className="w-16 h-16 rounded overflow-hidden">
                      <img
                        src={selectedBooking.stadium.image}
                        alt={selectedBooking.stadium.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <Typography className="font-semibold">{selectedBooking.stadium.name}</Typography>
                      <Typography variant="small" color="gray" className="dark:text-dark-text/70">
                        📍 {selectedBooking.stadium.location}
                      </Typography>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Typography variant="small" color="blue-gray" className="font-semibold mb-2">
                      Booking Time
                    </Typography>
                    <div className="space-y-1">
                      <Typography>
                        📅 {formatDate(selectedBooking.date)}
                      </Typography>
                      <Typography>
                        ⏰ {selectedBooking.timeSlot}
                      </Typography>
                      <Typography>
                        ⏱️ {selectedBooking.hours} hours
                      </Typography>
                    </div>
                  </div>
                  
                  <div>
                    <Typography variant="small" color="blue-gray" className="font-semibold mb-2">
                      Payment Information
                    </Typography>
                    <div className="space-y-1">
                      <Typography className="font-bold text-emerald-600 dark:text-emerald-400">
                        💰 ${selectedBooking.totalAmount}
                      </Typography>
                      <Typography>
                        💳 {selectedBooking.paymentMethod}
                      </Typography>
                      <Typography variant="small" color="gray" className="dark:text-dark-text/70">
                        Booked on {formatSimpleDate(selectedBooking.bookingDate)}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={() => setViewDialogOpen(false)}
              className="mr-2"
            >
              Close
            </Button>
            <Button
              color="blue"
              onClick={() => {
                setViewDialogOpen(false);
                handleStatusChange(selectedBooking);
              }}
            >
              Update Status
            </Button>
          </DialogFooter>
        </Dialog>

        {/* Update Status Dialog */}
        <Dialog
          open={statusDialogOpen}
          handler={() => setStatusDialogOpen(false)}
          className="dark:bg-dark-surface"
        >
          <DialogHeader className="dark:text-dark-text">
            Update Booking Status
          </DialogHeader>
          <DialogBody className="dark:text-dark-text">
            {selectedBooking && (
              <div className="space-y-4">
                <Typography>
                  Update status for booking by <span className="font-bold">{selectedBooking.user.name}</span>
                </Typography>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <Button
                    color="green"
                    className="flex flex-col items-center justify-center p-4"
                    onClick={() => updateBookingStatus("confirmed")}
                  >
                    <CheckCircleIcon className="h-8 w-8 mb-2" />
                    Confirm
                  </Button>
                  <Button
                    color="yellow"
                    className="flex flex-col items-center justify-center p-4"
                    onClick={() => updateBookingStatus("pending")}
                  >
                    <ClockIcon className="h-8 w-8 mb-2" />
                    Pending
                  </Button>
                  <Button
                    color="red"
                    className="flex flex-col items-center justify-center p-4"
                    onClick={() => updateBookingStatus("cancelled")}
                  >
                    <XCircleIcon className="h-8 w-8 mb-2" />
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="blue-gray"
              onClick={() => setStatusDialogOpen(false)}
            >
              Cancel
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
};

export default BookingsManagement;
