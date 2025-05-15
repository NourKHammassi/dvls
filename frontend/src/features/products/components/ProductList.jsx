import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Pagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsAsync,
  selectProducts,
  selectProductTotalResults,
} from "../ProductSlice";
import { ProductCard } from "./ProductCard";
import { ITEMS_PER_PAGE } from "../../../constants";
import Slider from "react-slick";

export const ProductList = () => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const products = useSelector(selectProducts);
  const totalResults = useSelector(selectProductTotalResults);
  const dispatch = useDispatch();

  useEffect(() => {
    const filters = { pagination: { page: page, limit: ITEMS_PER_PAGE }, sort };
    dispatch(fetchProductsAsync(filters));
  }, [page, sort]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Stack spacing={2}>
      <Slider {...settings}>
        {products.map((product) => (
          <div
            key={product._id}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0 10px",
            }}
          >
            <ProductCard
              id={product._id}
              title={product.title}
              description={product.description}
              thumbnail={product.thumbnail}
              layout="column"
            />
          </div>

        ))}
      </Slider>
    </Stack>
  );
};
