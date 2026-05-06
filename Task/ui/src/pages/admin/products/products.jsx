import React, { useEffect, useState } from "react";

function Products() {
  const API = "http://localhost:3000/products";

  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [editingId, setEditingId] = useState(null);


  const getProducts = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setProducts(data);
  };

  const createProduct = async (product) => {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
  };

  const updateProduct = async (id, product) => {
    await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
  };

  const removeProduct = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });
  };

 
  useEffect(() => {
    getProducts();
  }, []);

  
  const resetForm = () => {
    setName("");
    setPrice("");
    setCategory("");
    setImage("");
    setEditingId(null);
  };

  
  const handleSubmit = async () => {
    if (!name || !price || !image) return;

    const productData = {
      name,
      price,
      category,
      image,
    };

    if (editingId) {
      await updateProduct(editingId, {
        ...productData,
        id: editingId,
      });
    } else {
      await createProduct({
        ...productData,
        id: Date.now(),
      });
    }

    await getProducts(); // 🔥 əsas fix
    resetForm();
  };

 
  const deleteProduct = async (id) => {
    await removeProduct(id);
    await getProducts(); // 🔥 fix
  };

 
  return (
    <div>
      <h2 className="text-[30px] text-[#875d69] font-bold mb-6">
        Products
      </h2>

     
      <div className="bg-white p-4 rounded-xl shadow mb-6 flex gap-3">
        <input
          className="border p-2 flex-1"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          className="border p-2 flex-1"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const imageUrl = URL.createObjectURL(file);
              setImage(imageUrl);
            }
          }}
        />

        <input
          className="border p-2 w-32"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          className="border p-2 w-40"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="bg-pink-500 text-white px-4 rounded"
        >
          {editingId ? "Update" : "Add"}
        </button>
      </div>

     
      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-pink-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-3">{item.name}</td>

                <td className="p-3">
                  <img
                    src={item.image}
                    alt=""
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>

                <td className="p-3">{item.price} AZN</td>
                <td className="p-3">{item.category}</td>

                <td className="p-3">
                
                  <button
                    onClick={() => {
                      setName(item.name);
                      setPrice(item.price);
                      setCategory(item.category);
                      setImage(item.image);
                      setEditingId(item.id);
                    }}
                    className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>

                  
                  <button
                    onClick={() => deleteProduct(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;