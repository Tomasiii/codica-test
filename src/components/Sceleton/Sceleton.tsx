import "react-loading-skeleton/dist/skeleton.css";

import { FC } from "react";
import Skeleton, { SkeletonProps } from "react-loading-skeleton";

const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => {
  return <Skeleton {...rest} className={className} />;
};

export default SkeletonLoader;
