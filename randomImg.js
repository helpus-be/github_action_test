const randomImg = [
  'https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80',
  'https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1625489409904-324a5e9591e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1674367694162-018eb775ae66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1674310418669-59ad99f2b3c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4M3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1674326931395-fab2610e2d10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',

  'https://images.unsplash.com/photo-1673391201789-dc00e38b320c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1673960373434-970804d4a6f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1673912401829-6495e87f3b9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1673898980419-bfc5fe672884?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNjN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1674152693451-21bc4ee5cfe2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyODh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1674123784420-6f4b12b2ecd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1673973095118-0b66d3685a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzODN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1674128824504-63c10a5541d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',

  'https://images.unsplash.com/photo-1674053524062-30b8ad746d4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1673980550207-b5afc268e9a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1673981838065-0772d481a01f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1673975640546-662dc96629d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1673928061060-3b5a0c49774c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1673900487541-fae5ac19aaba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mjd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1673878034060-2d97a101563a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1673744375171-ba44dcdb6f3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NDB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1673824025478-f918f226ba56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1673718859169-1c6c0f3a4651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1673786427492-960fc4a0c1b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1673731215529-a45181460626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1673737915648-cf9369bfe923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1673718859197-60d71fb0cecf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MjN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1673625448598-a09d96472ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Mzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1673725437510-fe7bc808c306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1673631518007-e08495fa5483?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2ODJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
];

export default randomImg;
