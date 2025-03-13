import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from 'axios';

const MyOrders = () => {
  // ...existing code...
  useEffect(() => {
    const fetchOrders = async () => {
      // ...existing code...
    };
    fetchOrders();
  }, []);

  const handleCancelOrder = async (orderId) => {
    // ...existing code...
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {orders.map((order) => (
            <Card key={order.id} className="p-4">
              <CardContent>
                <h2 className="text-xl font-semibold">Order ID: {order.id}</h2>
                <p>Status: {order.status}</p>
                <p>Total: ${order.total}</p>
                <p>Shipping Date: {new Date(order.shippingDate).toLocaleDateString()}</p>
                <p>Shipping Address: {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.state}, {order.shippingAddress.zip}, {order.shippingAddress.country}</p>
                <h3 className="text-lg font-semibold mt-2">Items:</h3>
                <ul>
                  {order.orderItems.map((item, index) => (
                    <li key={index}>{item.name} - {item.quantity} x ${item.price}</li>
                  ))}
                </ul>
                {order.status !== 'Cancelled' && (
                  <Button variant="outline" className="mt-2" onClick={() => handleCancelOrder(order.id)}>Cancel Order</Button>
                )}
                {order.status === 'Cancelled' && (
                  <p className="text-red-600 font-semibold">Order Cancelled</p>
                )}
                <Link to={`/order/${order.id}`}>
                  <Button variant="outline" className="mt-2 ml-2">View Details</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
