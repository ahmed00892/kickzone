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
  EyeIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";

const BookingsManagement = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [statusDialogOpen, setStatusDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Helper function to format dates
  const formatDate = (date) => {
    const d = new Date(date);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    return {
      short: `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`,
      long: `${days[d.getDay()]}, ${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
    };
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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 dark:border-emerald-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-dark-text">Loading bookings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-light-bg dark:bg-dark-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <Typography variant="h3" className="font-bold text-gray-800 dark:text-dark-text mb-2 text-2xl md:text-3xl">
            Bookings Management
          </Typography>
          <Typography className="text-gray-600 dark:text-dark-text/70 text-sm md:text-base">
            Manage all stadium bookings and reservations
          </Typography>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-dark-surface border-l-4 border-blue-500">
            <CardBody className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <Typography className="text-sm font-medium text-gray-600 dark:text-dark-text/70 mb-1">
                    Total Bookings
                  </Typography>
                  <Typography variant="h4" className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-dark-text">
                    {stats.total}
                  </Typography>
                  <Typography className="mt-1 text-xs md:text-sm font-medium text-blue-600 dark:text-blue-400">
                    All time bookings
                  </Typography>
                </div>
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full shadow-md">
                  <CalendarDaysIcon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-dark-surface border-l-4 border-green-500">
            <CardBody className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <Typography className="text-sm font-medium text-gray-600 dark:text-dark-text/70 mb-1">
                    Confirmed
                  </Typography>
                  <Typography variant="h4" className="font-bold text-2xl md:text-3xl text-green-600 dark:text-green-400">
                    {stats.confirmed}
                  </Typography>
                  <Typography className="mt-1 text-xs md:text-sm font-medium text-green-600 dark:text-green-400">
                    Active reservations
                  </Typography>
                </div>
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-md">
                  <CheckCircleIcon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-dark-surface border-l-4 border-emerald-500">
            <CardBody className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <Typography className="text-sm font-medium text-gray-600 dark:text-dark-text/70 mb-1">
                    Total Revenue
                  </Typography>
                  <Typography variant="h4" className="font-bold text-2xl md:text-3xl text-emerald-600 dark:text-emerald-400">
                    ${stats.revenue}
                  </Typography>
                  <Typography className="mt-1 text-xs md:text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    From confirmed bookings
                  </Typography>
                </div>
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full shadow-md">
                  <CurrencyDollarIcon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-dark-surface border-l-4 border-yellow-500">
            <CardBody className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <Typography className="text-sm font-medium text-gray-600 dark:text-dark-text/70 mb-1">
                    Pending
                  </Typography>
                  <Typography variant="h4" className="font-bold text-2xl md:text-3xl text-yellow-600 dark:text-yellow-400">
                    {stats.pending}
                  </Typography>
                  <Typography className="mt-1 text-xs md:text-sm font-medium text-yellow-600 dark:text-yellow-400">
                    Awaiting confirmation
                  </Typography>
                </div>
                <div className="p-3 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full shadow-md">
                  <ClockIcon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Filters */}
        <Card className="shadow-lg mb-6 md:mb-8 bg-white dark:bg-dark-surface">
          <CardBody className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-dark-text/50" />
                  <Input
                    label="Search bookings..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-gray-50 dark:bg-dark-bg border-gray-200 dark:border-dark-text/20"
                    color="blue"
                    labelProps={{
                      className: "text-gray-600 dark:text-dark-text/70",
                    }}
                  />
                </div>
              </div>
              
              <div className="w-full md:w-64">
                <div className="flex items-center gap-2">
                  <FunnelIcon className="h-5 w-5 text-gray-400 dark:text-dark-text/50" />
                  <Select
                    label="Filter by Status"
                    value={statusFilter}
                    onChange={(value) => setStatusFilter(value)}
                    className="bg-gray-50 dark:bg-dark-bg border-gray-200 dark:border-dark-text/20"
                    color="blue"
                    labelProps={{
                      className: "text-gray-600 dark:text-dark-text/70",
                    }}
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
        <Card className="shadow-lg bg-white dark:bg-dark-surface">
          <CardBody className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full min-w-max table-auto">
                <thead>
                  <tr className="bg-gray-50 dark:bg-dark-bg border-b border-gray-200 dark:border-dark-text/10">
                    <th className="p-4 text-left">
                      <Typography variant="small" className="font-bold text-gray-700 dark:text-dark-text">
                        Booking
                      </Typography>
                    </th>
                    <th className="p-4 text-left">
                      <Typography variant="small" className="font-bold text-gray-700 dark:text-dark-text">
                        Stadium
                      </Typography>
                    </th>
                    <th className="p-4 text-left">
                      <Typography variant="small" className="font-bold text-gray-700 dark:text-dark-text">
                        Date & Time
                      </Typography>
                    </th>
                    <th className="p-4 text-left">
                      <Typography variant="small" className="font-bold text-gray-700 dark:text-dark-text">
                        Amount
                      </Typography>
                    </th>
                    <th className="p-4 text-left">
                      <Typography variant="small" className="font-bold text-gray-700 dark:text-dark-text">
                        Status
                      </Typography>
                    </th>
                    <th className="p-4 text-left">
                      <Typography variant="small" className="font-bold text-gray-700 dark:text-dark-text">
                        Actions
                      </Typography>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map((booking) => (
                    <tr 
                      key={booking.id} 
                      className="border-b border-gray-100 dark:border-dark-text/10 hover:bg-gray-50 dark:hover:bg-dark-bg/50 transition-colors"
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <Avatar 
                            src={booking.user.avatar} 
                            alt={booking.user.name} 
                            size="sm" 
                            className="border-2 border-gray-200 dark:border-dark-text/20"
                          />
                          <div>
                            <Typography variant="small" className="font-semibold text-gray-800 dark:text-dark-text">
                              {booking.user.name}
                            </Typography>
                            <Typography variant="small" className="text-xs text-gray-600 dark:text-dark-text/70">
                              {booking.user.email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded overflow-hidden border border-gray-200 dark:border-dark-text/20">
                            <img
                              src={booking.stadium.image}
                              alt={booking.stadium.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <Typography variant="small" className="font-medium text-gray-800 dark:text-dark-text">
                              {booking.stadium.name}
                            </Typography>
                            <Typography variant="small" className="text-xs text-gray-600 dark:text-dark-text/70">
                              {booking.stadium.location}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <Typography variant="small" className="font-medium text-gray-800 dark:text-dark-text">
                          {formatDate(booking.date).short}
                        </Typography>
                        <Typography variant="small" className="text-xs text-gray-600 dark:text-dark-text/70">
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
                          className="capitalize font-medium"
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
                            className="flex items-center gap-1 px-3"
                          >
                            <EyeIcon className="h-4 w-4" />
                            View
                          </Button>
                          <Button
                            size="sm"
                            color="green"
                            variant="gradient"
                            onClick={() => handleStatusChange(booking)}
                            className="flex items-center gap-1 px-3 bg-gradient-to-r from-green-500 to-emerald-600"
                          >
                            <PencilSquareIcon className="h-4 w-4" />
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

        {/* No results message */}
        {filteredBookings.length === 0 && (
          <Card className="shadow-lg mt-6 bg-white dark:bg-dark-surface">
            <CardBody className="p-8 text-center">
              <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-gray-100 dark:bg-dark-bg flex items-center justify-center">
                <CalendarDaysIcon className="h-8 w-8 text-gray-400 dark:text-dark-text/50" />
              </div>
              <Typography variant="h5" className="text-gray-700 dark:text-dark-text mb-2">
                No bookings found
              </Typography>
              <Typography className="text-gray-600 dark:text-dark-text/70">
                Try adjusting your search or filter criteria
              </Typography>
            </CardBody>
          </Card>
        )}

        {/* View Booking Dialog */}
        <Dialog
          open={viewDialogOpen}
          handler={() => setViewDialogOpen(false)}
          className="bg-white dark:bg-dark-surface shadow-2xl"
          size="lg"
        >
          <DialogHeader className="text-gray-800 dark:text-dark-text border-b border-gray-200 dark:border-dark-text/10 p-6">
            Booking Details
          </DialogHeader>
          <DialogBody className="p-6">
            {selectedBooking && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Typography variant="h6" className="font-bold text-gray-700 dark:text-dark-text">
                      Customer Information
                    </Typography>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-dark-bg rounded-lg">
                      <Avatar 
                        src={selectedBooking.user.avatar} 
                        alt={selectedBooking.user.name} 
                        size="lg" 
                        className="border-2 border-gray-200 dark:border-dark-text/20"
                      />
                      <div>
                        <Typography className="font-bold text-gray-800 dark:text-dark-text">
                          {selectedBooking.user.name}
                        </Typography>
                        <Typography className="text-sm text-gray-600 dark:text-dark-text/70">
                          {selectedBooking.user.email}
                        </Typography>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Typography variant="h6" className="font-bold text-gray-700 dark:text-dark-text">
                      Booking Status
                    </Typography>
                    <div className="flex items-center gap-3">
                      <Chip
                        value={selectedBooking.status}
                        color={getStatusColor(selectedBooking.status)}
                        icon={getStatusIcon(selectedBooking.status)}
                        className="capitalize text-base py-2 px-4"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Typography variant="h6" className="font-bold text-gray-700 dark:text-dark-text">
                    Stadium Details
                  </Typography>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-dark-bg rounded-lg">
                    <div className="w-20 h-20 rounded-lg overflow-hidden border border-gray-200 dark:border-dark-text/20">
                      <img
                        src={selectedBooking.stadium.image}
                        alt={selectedBooking.stadium.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <Typography className="font-bold text-lg text-gray-800 dark:text-dark-text">
                        {selectedBooking.stadium.name}
                      </Typography>
                      <Typography className="text-gray-600 dark:text-dark-text/70">
                        📍 {selectedBooking.stadium.location}
                      </Typography>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Typography variant="h6" className="font-bold text-gray-700 dark:text-dark-text">
                      Booking Time
                    </Typography>
                    <div className="space-y-3 p-4 bg-gray-50 dark:bg-dark-bg rounded-lg">
                      <div className="flex items-center gap-2">
                        <CalendarDaysIcon className="h-5 w-5 text-blue-500" />
                        <Typography className="text-gray-800 dark:text-dark-text">
                          {formatDate(selectedBooking.date).long}
                        </Typography>
                      </div>
                      <div className="flex items-center gap-2">
                        <ClockIcon className="h-5 w-5 text-blue-500" />
                        <Typography className="text-gray-800 dark:text-dark-text">
                          {selectedBooking.timeSlot}
                        </Typography>
                      </div>
                      <Typography className="text-sm text-gray-600 dark:text-dark-text/70">
                        ⏱️ {selectedBooking.hours} hours
                      </Typography>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Typography variant="h6" className="font-bold text-gray-700 dark:text-dark-text">
                      Payment Information
                    </Typography>
                    <div className="space-y-3 p-4 bg-gray-50 dark:bg-dark-bg rounded-lg">
                      <div className="flex items-center gap-2">
                        <CurrencyDollarIcon className="h-5 w-5 text-emerald-500" />
                        <Typography className="font-bold text-lg text-emerald-600 dark:text-emerald-400">
                          ${selectedBooking.totalAmount}
                        </Typography>
                      </div>
                      <Typography className="text-gray-800 dark:text-dark-text">
                        💳 {selectedBooking.paymentMethod}
                      </Typography>
                      <Typography className="text-sm text-gray-600 dark:text-dark-text/70">
                        Booked on {formatDate(selectedBooking.bookingDate).short}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogBody>
          <DialogFooter className="border-t border-gray-200 dark:border-dark-text/10 p-6">
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
              className="bg-gradient-to-r from-blue-500 to-cyan-600"
            >
              Update Status
            </Button>
          </DialogFooter>
        </Dialog>

        {/* Update Status Dialog */}
        <Dialog
          open={statusDialogOpen}
          handler={() => setStatusDialogOpen(false)}
          className="bg-white dark:bg-dark-surface shadow-2xl"
          size="md"
        >
          <DialogHeader className="text-gray-800 dark:text-dark-text border-b border-gray-200 dark:border-dark-text/10 p-6">
            Update Booking Status
          </DialogHeader>
          <DialogBody className="p-6">
            {selectedBooking && (
              <div className="space-y-6">
                <Typography className="text-gray-700 dark:text-dark-text">
                  Update status for booking by <span className="font-bold">{selectedBooking.user.name}</span>
                </Typography>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button
                    color="green"
                    className="flex flex-col items-center justify-center p-4 h-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                    onClick={() => updateBookingStatus("confirmed")}
                  >
                    <CheckCircleIcon className="h-10 w-10 mb-2 text-white" />
                    <span className="font-semibold text-white">Confirm</span>
                  </Button>
                  <Button
                    color="yellow"
                    className="flex flex-col items-center justify-center p-4 h-auto bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700"
                    onClick={() => updateBookingStatus("pending")}
                  >
                    <ClockIcon className="h-10 w-10 mb-2 text-white" />
                    <span className="font-semibold text-white">Pending</span>
                  </Button>
                  <Button
                    color="red"
                    className="flex flex-col items-center justify-center p-4 h-auto bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700"
                    onClick={() => updateBookingStatus("cancelled")}
                  >
                    <XCircleIcon className="h-10 w-10 mb-2 text-white" />
                    <span className="font-semibold text-white">Cancel</span>
                  </Button>
                </div>
              </div>
            )}
          </DialogBody>
          <DialogFooter className="border-t border-gray-200 dark:border-dark-text/10 p-6">
            <Button
              variant="text"
              color="gray"
              onClick={() => setStatusDialogOpen(false)}
              className="text-gray-600 dark:text-dark-text/70"
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
