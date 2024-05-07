import { Types } from '@ohif/core';
import ToolGroupService from '../services/ToolGroupService';
import SyncGroupService from '../services/SyncGroupService';
import SegmentationService from '../services/SegmentationService';
import CornerstoneCacheService from '../services/CornerstoneCacheService';
import CornerstoneViewportService from '../services/ViewportService/CornerstoneViewportService';
import ViewportActionCornersService from '../services/ViewportActionCornersService/ViewportActionCornersService';
import ColorbarService from '../services/ColorbarService';

declare global {
  interface CornerstoneServices extends Types.Services {
    cornerstoneViewportService: CornerstoneViewportService;
    toolGroupService: ToolGroupService;
    syncGroupService: SyncGroupService;
    segmentationService: SegmentationService;
    cornerstoneCacheService: CornerstoneCacheService;
    viewportActionCornersService: ViewportActionCornersService;
    colorbarService: ColorbarService;
  }

  type cornerstoneViewportService = CornerstoneViewportService;
  type toolGroupService = ToolGroupService;
  type syncGroupService = SyncGroupService;
  type segmentationService = SegmentationService;
  type cornerstoneCacheService = CornerstoneCacheService;
  type viewportActionCornersService = ViewportActionCornersService;
  type colorbarService = ColorbarService;
}

export default CornerstoneServices;
