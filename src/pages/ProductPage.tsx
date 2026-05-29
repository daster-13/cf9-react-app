// import {useParams} from "react-router";
// import {useLayoutEffect} from "react";
// import {getProduct} from "../api/product";
// import {useForm} from "react-hook-form";
// import {zodResolver} from "@hookform/resolvers/zod";
// import type { ProductFormData, productFormSchema} from "@/schemas/product";
// import {Field} from "@/components/ui/field.tsx";
//
//
// const  ProductPage = () => {
//     const {productId} = useParams();
//     const {
//         register,
//         handleSubmit,
//         setValue,
//         watch,
//         formState: {errors, isSubmitting},
//         reset
//     } = useForm<ProductFormData>({
//         resolver: zodResolver(productFormSchema),
//         defaultValues: {
//             name: "",
//             slug: "",
//             description: "",
//             image: "",
//             price: 0,
//             sort: 0,
//             is_active: false,
//             is_favorite: false,
//             category_id: 1
//         }
//     })
//
//
//
//     useLayoutEffect(() => {
//         if(productId){
//             getProduct(productId)
//                 .then((data) =>{
//                     const values= {
//                         name: data.name ?? "",
//                         slug: data.slug ?? "",
//                         description: data.description ?? "",
//                         image: data.image ?? "",
//                         price: data.price ?? "",
//                         sort: data.sort,
//                         is_active: data.is_active,
//                         is_favorite: data.is_favorite,
//                         category_id: 100
//                     }
//                     reset(values);
//                     })
//                 .catch((err) => {
//                     console.log("Error fetching product", err);
//                     toast.error( "Error fetching product");
//                     }
//
//                 )
//         }
//
//     })
//     return(
//         <>
//             <form
//                 //onSubmit={}
//                 className="max-w-xl mx-auto p-8 border rounded-md space-y-6 bg-white"
//                 autoComplete="off"
//                 />
//             <h1 className="text-xl font-bold mb-4">
//                 Edit Product
//             </h1>
//             <Field>
//
//             </Field>
//         </>
//     )
// }
// export default  ProductPage