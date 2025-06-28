/*
  # Add policies for orders dashboard access

  1. Security Updates
    - Add policy for staff to read all orders
    - Add policy for staff to update order status
    - Note: In production, you'd want proper role-based access control
*/

-- For now, allow authenticated users to read all orders (in production, restrict to staff only)
CREATE POLICY "Staff can read all orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update order status (in production, restrict to staff only)
CREATE POLICY "Staff can update order status"
  ON orders
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow reading order items for all orders (for dashboard)
CREATE POLICY "Staff can read all order items"
  ON order_items
  FOR SELECT
  TO authenticated
  USING (true);